import tkinter as tk
from tkinter import filedialog
import librosa
import librosa.display
import numpy as np
import matplotlib.pyplot as plt

def load_audio():
    file_path = filedialog.askopenfilename()
    if file_path:
        y, sr = librosa.load(file_path)
        print(f"音频文件加载成功：{file_path}")

        # 节奏分析
        tempo, beats = librosa.beat.beat_track(y=y, sr=sr)
        print(f"Estimated tempo: {tempo} BPM")

        # 音高分析
        pitches, magnitudes = librosa.piptrack(y=y, sr=sr)
        mean_pitch = np.mean(pitches, axis=0)
        plt.figure(figsize=(10, 4))
        frames = range(len(mean_pitch))
        t = librosa.frames_to_time(frames)
        plt.plot(t, mean_pitch)
        plt.title('Mean Pitch Over Time')
        plt.xlabel('Time (s)')
        plt.ylabel('Pitch')
        plt.tight_layout()
        plt.show()

        # 特征提取（以 MFCC 为例）
        mfccs = librosa.feature.mfcc(y=y, sr=sr)
        plt.figure(figsize=(10, 4))
        librosa.display.specshow(mfccs, x_axis='time')
        plt.colorbar()
        plt.title('MFCC')
        plt.tight_layout()
        plt.show()

root = tk.Tk()
root.title("音频分析工具")

button = tk.Button(root, text="打开音频文件", command=load_audio)
button.pack()

root.mainloop()