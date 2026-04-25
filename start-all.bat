@echo off
echo Starting WayQuizz Application...
echo.
echo Starting Backend Server (Port 5000)...
set ROOT=%~dp0
start cmd /k "cd /d "%ROOT%server" && npm start"
echo.
timeout /t 3 /nobreak >nul
echo.
echo Starting Frontend Dev Server...
start cmd /k "cd /d "%ROOT%wayquiz-app" && npm run dev -- --host"
echo.
echo ✅ Both servers starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
pause
