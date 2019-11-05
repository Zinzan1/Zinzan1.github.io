$DSMCUtil = "node"
$Params = @(
    "app.js"
)

[system.Diagnostics.Process]::Start("firefox","localhost:3000")
& $DSMCUtil $Params
