import os, json, yaml

# import markdown


def read_json(file_name: str) -> dict:
    assert os.path.exists(file_name), f"Json file {file_name} is not exists."
    with open(file_name, "r") as f:
        return json.load(f)


def write_json(file_name: str, data: dict) -> None:
    with open(file_name, "w") as f:
        json.dump(data, f)


def read_yaml(file_name: str) -> dict:
    assert os.path.exists(file_name), f"Json file {file_name} is not exists."
    with open(file_name, "r") as f:
        return yaml.safe_load(f.read().replace("\t", "    "))


def write_yaml(file_name: str, data: dict) -> None:
    if not os.path.exists(file_name):
        with open(file_name, "w") as f:
            pass  # 创建空文件
    with open(file_name, "w") as f:
        yaml.safe_dump(data, f, allow_unicode=True)

