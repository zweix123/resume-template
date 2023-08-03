import os, copy
from typing import Any, Optional


def read(file_name: str, tab="  ") -> dict:
    # custom yaml reader, support map(only one level), comment
    assert os.path.exists(file_name), f"Json file {file_name} is not exists."

    def closure_dfs():
        root = dict()

        st = [root]
        last_edge = ""

        def put(key: Optional[str], val: Any, need_up: bool = False):
            nonlocal st, last_edge

            if need_up:
                st.pop()

            # key and val must at least have one valid
            # key is None and val is not None(str, bool, int, float): list ->
            # 一下两种情况的区分通过val的自然值
            # key is str and val is not None: dict entry                   -> ok
            # key is str and val is None: emptry dict                      -> ok

            if st[-1] is None:
                assert len(st) >= 2, "Is Improbable!"
                st[-2][last_edge] = dict()
                st[-1] = st[-2][last_edge]

            st[-1][key] = val
            if st[-1][key] is None:
                st.append(st[-1][key])
                last_edge = key

        def closure_result():
            return root

        return put, closure_result

    handler, resulter = closure_dfs()
    last_depth = 0

    with open(file_name, "r") as f:
        for line in f:
            line = line[:-1]  # 去除末尾空格

            # 去除注释部分, 行首注释和行末尾注释, 用可爱的海报运算符压压行吧
            if (comment_symbol_index := line.find("#")) != -1 and (
                comment_symbol_index == 0 or line[comment_symbol_index - 1] == " "
            ):
                line = line[:comment_symbol_index]

            # 空行则跳过
            if len(line.strip()) == 0:
                continue

            # handle level
            depth = 0
            while line.startswith(tab):
                depth += 1
                line = line[len(tab) :]

            key, val = map(str.strip, line.split(":", 1))

            if val.strip('"') and val.endswith('"'):  # must be str
                val = val[1:-1]
            elif val == "true" or val == "false":  # bool
                val = bool(val)
            # 注意在上面的分支有可能val is \"true\", 即双引号和true都是其内容, 也认为是字符串
            else:
                # maybe float and int, there only try float
                try:
                    val = float(val)
                except ValueError:  # convert fail -> str
                    pass

            arg_key = key
            arg_val = val
            if isinstance(val, str) and len(val) == 0:
                arg_val = None
            need_up = False if depth >= last_depth else True

            handler(arg_key, arg_val, need_up)

            last_depth = depth

        return resulter()


def write(filepath: str, data: dict, tab: str = "  ") -> None:
    with open(filepath, "w") as f:

        def dfs(node: Any, pre: str = ""):
            if isinstance(node, dict):
                f.write("\n")
                for k, v in node.items():
                    f.write(f"{pre}{k}: ")
                    dfs(v, pre + tab)
                return
            elif isinstance(node, str):
                f.write(f'"{node}"\n')
            elif isinstance(node, list):
                for ele in node:
                    f.write(f"{pre}- ")
                    dfs(ele, pre + tab)
            else:
                f.write(f"{node}\n")

        dfs(data)


def write2(filepath: str, data: Any, tab: str = "  ") -> None:
    with open(filepath, "w") as f:

        def dfs(node: Any, allow_endl: bool = False, pre: str = ""):
            if isinstance(node, dict):
                if allow_endl:
                    f.write("\n")
                t = pre if allow_endl else ""
                for k, v in node.items():
                    f.write(f"{t}{k}: ")
                    dfs(v, True, pre + tab)
                    t = pre
            elif isinstance(node, list):
                if allow_endl:
                    f.write("\n")
                t = pre if allow_endl else ""
                for ele in node:
                    f.write(f"{t}- ")
                    dfs(ele, False, pre + tab)
                    t = pre
            else:
                if isinstance(node, str):
                    node = f'"{node}"'
                t = "" if allow_endl else pre
                f.write(f"{t}{node}\n")

        dfs(data)
