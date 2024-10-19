import librosa

audio_file = r'C:\Users\yukio\Desktop\music\8bit music.MP3'
y, sr = librosa.load(audio_file, sr=None)  # sr=None 表示使用文件的原采样率
pitch, mag = librosa.piptrack(y=y, sr=sr)

from fluidsynth import FluidSynth
import numpy as np
import wave

fs = FluidSynth()
sfid = fs.sfload("path/to/soundfont.sf2")  # 加载8-bit风格的SoundFont文件

# 假设你已经有了一个midi文件，并且已经转换成了一个numpy数组形式的音符序列
notes = np.array([[60, 0, 1], [62, 1, 1]])  # 示例音符序列
fs.note_on(0, notes[0][0], 127)  # 发音
fs.note_off(0, notes[0][0])  # 停止发音

# 创建一个WAV文件
with wave.open('output.wav', 'w') as w:
    w.setnchannels(1)  # 单声道
    w.setsampwidth(2)  # 16位深度
    w.setframerate(44100)  # 采样率
    data = fs.get_samples(len(notes) * 44100)  # 获取合成的音频数据
    w.writeframes(data.tobytes())