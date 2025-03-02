from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI()

class PromptRequest(BaseModel):
    prompt: str

class EvaluateResponse(BaseModel):
    response: str
    score: int
    feedback: str

class ImproveRequest(BaseModel):
    prompt: str
    previous_score: int

class ImproveResponse(BaseModel):
    improved_prompt: str

database = []

@app.post("/test_prompt", response_model=EvaluateResponse)
def test_prompt(request: PromptRequest):
    # Simulation d'une analyse de prompt
    score = random.randint(1, 20)  # Score aléatoire pour tester
    feedback = "Améliore la clarté et la précision." if score < 18 else "Le prompt est bien structuré."
    return {"response": f"Réponse générée pour : {request.prompt}", "score": score, "feedback": feedback}

@app.post("/improve_prompt", response_model=ImproveResponse)
def improve_prompt(request: ImproveRequest):
    improved_prompt = f"Version améliorée : {request.prompt} (Optimisé)"
    return {"improved_prompt": improved_prompt}

@app.post("/store_best_prompt")
def store_best_prompt(request: PromptRequest, score: int):
    if score >= 18:
        database.append(request.prompt)
        return {"message": "Prompt enregistré avec succès."}
    return {"message": "Score trop bas, prompt non sauvegardé."}
