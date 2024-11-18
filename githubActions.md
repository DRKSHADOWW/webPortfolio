### github actions
-workflow

[
    name: hola-mundo
    on: [push]
    jobs:
      hola-mundo  
        runs-on: ubuntu-latest
        steps:
          - name: Public IP
            id: ip
            uses: haythem/public-ip@v1.3
          - name: Hello World
            run : echo Hola ¡Mundo desde ${{steps.ip.outputs.ipv4}}!
]