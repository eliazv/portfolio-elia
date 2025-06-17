@echo off
echo ========================================
echo    DEPLOY AUTOMATICO SU VERCEL
echo ========================================
echo.
echo Avviando il deploy del portfolio...
echo.

powershell -Command "Invoke-WebRequest -Uri 'https://api.vercel.com/v1/integrations/deploy/prj_vakxYijycSxmNodmJ7dqmWlPmeBp/ym0M4ph0Oc' -Method POST"

echo.
echo ========================================
echo Deploy completato!
echo Controlla lo stato su: https://vercel.com/dashboard
echo ========================================
echo.
pause
