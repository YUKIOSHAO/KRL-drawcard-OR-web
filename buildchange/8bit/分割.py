import librosa
from pydub import AudioSegment

# 加载mp3文件
audio = AudioSegment.from_mp3(r'C:\Users\yukio\Desktop\music\8bit\8bit music.MP3')

# 导出为wav
audio.export("output.wav", format="wav")


# 加载音频文件
y, sr = librosa.load('output.wav', sr=None)  # sr=None 表示保持原始采样率


# 检测节拍位置
tempo, beat_frames = librosa.beat.beat_track(y=y, sr=sr)

# 转换帧到秒
beat_times = librosa.frames_to_time(beat_frames, sr=sr)


# 假设你已经有了一个包含所有分割点的列表 split_points
split_points = list(beat_times)

for i in range(len(split_points)-1):
    t1 = split_points[i]
    t2 = split_points[i+1]
    
    # 使用pydub切分音频
    audio_segment = AudioSegment.from_wav("output.wav")
    segment = audio_segment[t1*1000:t2*1000]  # 时间单位转换为毫秒
    segment.export(f"segment_{i}.wav", format="wav")