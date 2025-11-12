from fastapi import FastAPI

app = FastAPI(title="ZenSpa Backend", version="1.0.0")

@app.get("/")
async def root():
    return {"message": "Welcome to ZenSpa Backend"}

# TODO: Include routers from modules
# app.include_router(auth.router, prefix="/auth", tags=["auth"])
# app.include_router(appointments.router, prefix="/appointments", tags=["appointments"])
# etc.
