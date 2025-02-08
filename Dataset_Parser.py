import pandas as pd

def filter_exercises(bodyparts, skill_level, equipment):
    
    file_path = "C:/megaGymDataset.csv"
    df = pd.read_csv(file_path)
    df = df.drop(columns=["Unnamed: 0", "Rating", "RatingDesc"])
    df = df[df["Equipment"] != "Other"]
    df = df.dropna()
    
    
    mask = pd.Series(True, index=df.index)
    
    
    if bodyparts:
        
        bodypart_mask = df['BodyPart'].apply(lambda x: any(part in x for part in bodyparts))
        mask = mask & bodypart_mask
    
    
    if skill_level:
        mask = mask & df['Level'].isin(skill_level)
    
    
    if equipment:
        mask = mask & df['Equipment'].isin(equipment)
    
    
    filtered_df = df[mask]
    
    return filtered_df


selected_bodyparts = ['Abdominals', 'Chest', 'Biceps']
selected_skill_level = ['Beginner']
selected_equipment = ['Bands', 'Barbell']

results = filter_exercises(selected_bodyparts, selected_skill_level, selected_equipment)

print(results)









