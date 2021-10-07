aluno1 = prompt("Digite o nome do aluno:")
nota = prompt ("Digite as notas separado por vírgula:")
notas = nota.split(",")
n1 = parseInt(notas[0])
n2 = parseInt(notas[1])
n3 = parseInt(notas[2])
notaAluno1 = (n1 + n2 + n3) / 3

if(notaAluno1 > 5){
    statusAluno1 = "APROVADO"
} else {
    statusAluno1 = "REPROVADO"
}

aluno2 = prompt("Digite o nome do aluno:")
nota = prompt ("Digite as notas separado por vírgula:")
notas = nota.split(",")
n1 = parseInt(notas[0])
n2 = parseInt(notas[1])
n3 = parseInt(notas[2])
notaAluno2 = (n1 + n2 + n3) / 3

if(notaAluno2 > 5){
    statusAluno2 = "APROVADO"
} else {
    statusAluno2 = "REPROVADO"
}

aluno3 = prompt("Digite o nome do aluno:")
nota = prompt ("Digite as notas separado por vírgula:")
notas = nota.split(",")
n1 = parseInt(notas[0])
n2 = parseInt(notas[1])
n3 = parseInt(notas[2])
notaAluno3 = (n1 + n2 + n3) / 3

if(notaAluno3 > 5){
    statusAluno3 = "APROVADO"
} else {
    statusAluno3 = "REPROVADO"
}

aluno4 = prompt("Digite o nome do aluno:")
nota = prompt ("Digite as notas separado por vírgula:")
notas = nota.split(",")
n1 = parseInt(notas[0])
n2 = parseInt(notas[1])
n3 = parseInt(notas[2])
notaAluno4 = (n1 + n2 + n3) / 3

if(notaAluno4 > 5){
    statusAluno4 = "APROVADO"
} else {
    statusAluno4 = "REPROVADO"
}

aluno5 = prompt("Digite o nome do aluno:")
nota = prompt ("Digite as notas separado por vírgula:")
notas = nota.split(",")
n1 = parseInt(notas[0])
n2 = parseInt(notas[1])
n3 = parseInt(notas[2])
notaAluno5 = (n1 + n2 + n3) / 3

if(notaAluno5 > 5){
    statusAluno5 = "APROVADO"
} else {
    statusAluno5 = "REPROVADO"
}


alert("Média dos alunos foi:" + "\n" + aluno1 + ", média de " + notaAluno1 + " foi " + statusAluno1 + "\n" + aluno2 + ", média de " + notaAluno2 + " foi " + statusAluno2 + "\n" + aluno3 + ", média de " + notaAluno3 + " foi " + statusAluno3 + "\n" + aluno4 + ", média de " + notaAluno4 + " foi " + statusAluno4 + "\n" + aluno5 + ", média de " + notaAluno5 + " foi " + statusAluno5)