'-------------------------------------------------------------------------------------------'
//Git: controlador de versões
//Github: plataforma para armazenação
'-------------------------------------------------------------------------------------------'
//Branch:para duplicar projeto alterando partes de forma separadamente
//git branch: visualiza ramificações existentes
//Criar e entrar na ramificação:
//1ª opção:
//git branch nome: cria nova ramificação
//git checkout nome: entra na ramificação escolhida
//2 opção:
//git checkout -b nome: cria e entra na ramificação com um único comando
//como excluir ramificação:
//git branch -d nomedoramo
'-------------------------------------------------------------------------------------------'
//git init: inicializar repositório vazio
'-------------------------------------------------------------------------------------------'
//git clone: clona/baixa repositório remoto para local(computador)pode ser feito:
// download do arquivo zip ou clonando no terminal através do HTTPS ou SSH
'-------------------------------------------------------------------------------------------'
//Fork: cópia do repositório no espaço remoto(não altera a original, vira nosso)
'-------------------------------------------------------------------------------------------'
//git status: verifica as alterações realizadas
'-------------------------------------------------------------------------------------------'
//git add: adiciona 1 ou mais arquivos para ser commitado. Pode ser feito:
//git add . adiciona todos de vez
//git add nomedoarquivo adiciona algo específico
'-------------------------------------------------------------------------------------------'
//git reset: faz exatamete o contrário do git add: Remove 1 ou mais arquivos da área de preparação (quando fica verde) 
//git reset . remove todos de vez
//git reset nome remove algo específico
'-------------------------------------------------------------------------------------------'
//git commit: cria um marco no projeto com mensagem descritiva para identificar registros do código
'-------------------------------------------------------------------------------------------'
//git remote add origin link : vincula repositório local(computador) a um repositório remoto
'-------------------------------------------------------------------------------------------'
//git push origin nomedoramo: empurra para espaço remoto
'-------------------------------------------------------------------------------------------'
//git pull: baixa alterações do repositório remoto para local(computador)
//git pull origin nomedoramo
'-------------------------------------------------------------------------------------------'
//git log: mostra os commits feitos
//git log -p : mostra os commits feitos de forma detalhada
//git logo --oneline: mostra os commits feitos em uma linha resumida
'-------------------------------------------------------------------------------------------'
//para enviar algo:
//1ª opção: Iniciando do zero
//git init
//git add
//git commit
//git push link
//2ª opção:Iniciando do zero
//git init
//git add
//git commit
//git remote add origin linkdorepositorio
//git push origin nomedoramo
//3ª opção: Repositório já existe ( não precisa usar o git init porque já foi inicializado em outro momento)
//git add
//git commit
//git push link
//4ª opção: Repositório já existe (não precisa usar o git init porque já foi inicializado em outro momento)
//git add
//git commit
//git remote add origin linkdorepositorio
//git push origin nomedoramo
'-------------------------------------------------------------------------------------------'