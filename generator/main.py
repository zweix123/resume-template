import os, argparse
from rich import print

import zaml
from config import GLOBAL_CONFIG_PATH, GLOBAL_CONFIG_TEMP_PATH, DATA_DIR_PATH
from utils import read_json, write_json


def join_ele(strs: list[str], sep: str) -> str:
    return sep.join([s for s in strs if len(s.strip()) != 0])


def parse_dict(data: dict) -> dict:
    new_data = dict()
    for k, v in data.items():
        ks = k.split("|")
        pre_dict = new_data
        for ek in ks[:-1]:
            if ek not in pre_dict:
                pre_dict[ek] = dict()
            pre_dict = pre_dict[ek]
        pre_dict[ks[-1]] = v
    return new_data


if __name__ == "__main__":
    usr_config_file_path = str()

    parser = argparse.ArgumentParser()
    parser.add_argument("-nogui", action="store_true", help="Disable GUI.")
    parser.add_argument("-f", "--file", help="Specify a file.")
    args = parser.parse_args()
    if args.nogui:
        if not args.file:
            print("nogui mode need file path.")
            exit(1)
        if os.path.exists(args.file) is False:
            print(f"file {args.file} is not exists.")
            exit(1)
        usr_config_file_path = args.file
    else:
        print("Dont't support GUI.")
        exit(0)
    # print(usr_config_file_path)
    usr_config = read_json(usr_config_file_path)
    # print(usr_config)

    # handle header config
    usr_header = usr_config["header"]
    res_config = zaml.read(GLOBAL_CONFIG_TEMP_PATH)
    # print(usr_header)
    # print(res_config)

    # handle header config
    # extra info
    usr_header["title"] = usr_header["resume_name"] + " Resume"
    usr_header["description"] = "A resume for " + usr_header["resume_name"] + " and GitHub Pages sites."  # fmt: skip
    usr_header["resume_header_contact_info"] = join_ele(
        [
            usr_header["resume_contact_address"],
            usr_header["resume_contact_telephone"],
            usr_header["resume_contact_email"],
        ],
        " • ",
    )
    # change struct
    usr_header = parse_dict(usr_header)
    # update
    res_config.update(usr_header)
    # write back
    print(res_config)
    zaml.write(GLOBAL_CONFIG_PATH, res_config)