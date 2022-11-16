function setup_venv() {
    python3 -m venv setup/venv
    source setup/venv/bin/activate

    echo "$PWD"
    pip install -r setup/requirements.txt
}

setup_venv
