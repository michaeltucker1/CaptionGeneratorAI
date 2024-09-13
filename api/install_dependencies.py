import subprocess
import sys

def install_package(package_name):
    try:
        import importlib
        importlib.import_module(package_name)
    except ImportError:
        print(f"{package_name} not found. Installing...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", package_name])
    else:
        print(f"{package_name} is already installed.")

if __name__ == "__main__":
    install_package('openai-whisper')


