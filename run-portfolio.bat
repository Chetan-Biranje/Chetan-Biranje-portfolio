@echo off
echo ===================================================
echo   Chetan Biranje - Cybersecurity Portfolio
echo ===================================================
echo.
echo Starting Backend Server (Port 5000)...
start "Portfolio Backend (Port 5000)" cmd /k "cd /d %~dp0backend && npm start"

echo Starting Frontend Dev Server (Port 3000)...
start "Portfolio Frontend (Port 3000)" cmd /k "cd /d %~dp0frontend && npm start"

echo.
echo ===================================================
echo   Portfolio starting up!
echo   Frontend: http://localhost:3000
echo   Backend:  http://localhost:5000
echo ===================================================
