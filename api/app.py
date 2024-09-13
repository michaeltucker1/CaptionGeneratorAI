from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess
import sys
import os
import whisper

def install_dependencies():
    subprocess.check_call([sys.executable, "install_dependencies.py"])

install_dependencies()


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

app.config['ALLOWED_EXTENSIONS'] = {'wav', 'mp3', 'm4a', 'mp4', 'mov', 'avi'}

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

def generate_captions(file):
    model = whisper.load_model("base")
    result = model.transcribe(file)
    return result

@app.route('/api/v1/test', methods=['GET'])
def test():
    return "Backend is working!"


@app.route('/api/v1/generate', methods=['POST'])
def generate():
    print("MADE A REQUEST")
    # Check if the request contains a file
    if 'file' not in request.files:
        return jsonify({"message": "No file"}), 400

    file = request.files['file']

    # Check if the file is selected and has an allowed extension
    if file.filename == '':
        return jsonify({"message": "No selected file"}), 400

    if file and allowed_file(file.filename):
        try:
            # Save the uploaded file temporarily
            file_path = os.path.join(UPLOAD_FOLDER, file.filename)
            file.save(file_path)
            
            # Generate captions directly from the saved file
            result = generate_captions(file_path)
            
            # Remove the file after processing
            os.remove(file_path)
            
            return jsonify({"language": result["language"], "captions": result["text"]}), 200
        except Exception as e:
            return jsonify({"message": "Error uploading file"}), 400

    else:
        return jsonify({"message": "File type not allowed"}), 400


if __name__ == '__main__':
    app.run()

