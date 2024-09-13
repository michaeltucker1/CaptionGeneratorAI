import subprocess
import sys

def install_package(package_name, package_url):
    try:
        import importlib
        importlib.import_module(package_name)
    except ImportError:
        print(f"{package_name} not found. Installing...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", package_url])
    else:
        print(f"{package_name} is already installed.")

if __name__ == "__main__":
    # Replace 'openai-whisper' with the package name you want to install
    install_package('openai-whisper', 'git+https://github.com/openai/whisper.git@279133e3107392276dc509148da1f41bfb532c7e')


