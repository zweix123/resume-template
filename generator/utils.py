import os, json
import markdown


def read_json(file_name: str) -> dict:
    assert os.path.exists(file_name), f"Json file {file_name} is not exists."
    with open(file_name, "r") as f:
        return json.load(f)


def write_json(file_name: str, data: dict) -> None:
    with open(file_name, "w") as f:
        json.dump(data, f)


def md2html(md: str) -> str:
    extensions: list[str] = [
        "meta",
        "fenced_code",
        "codehilite",
        "extra",
        "attr_list",
        "tables",
        "toc",
    ]
    return markdown.markdown(md, extensions=extensions)
