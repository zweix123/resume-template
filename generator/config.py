import os

GENERATOR_PATH = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT_PATH = os.path.dirname(GENERATOR_PATH)

GLOBAL_CONFIG_PATH = os.path.join(PROJECT_ROOT_PATH, "_config.yml")
GLOBAL_CONFIG_TEMP_PATH = os.path.join(PROJECT_ROOT_PATH, "_config template.yml")
DATA_DIR_PATH = os.path.join(PROJECT_ROOT_PATH, "_data")

RESUME_PATH = os.path.join(PROJECT_ROOT_PATH, "_layouts", "resume.html")
