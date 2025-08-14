# Multiplication de Matrices - Exercice 2

## Description

Cet exercice montre comment multiplier deux matrices étape par étape.  

Nous avons deux matrices :  

A = [[1, 2, 3],
[4, 5, 6]]

B = [[10, 11],
[13, 14],
[16, 17]]

## Calculs détaillés

- **Ligne 1 × Colonne 1**  
[1,2,3] × [10,13,16] = 110 + 213 + 3*16 = 84
- **Ligne 1 × Colonne 2**  
[1,2,3] × [11,14,17] = 111 + 214 + 3*17 = 90
-  **Ligne 2 × Colonne 1**  
[4,5,6] × [10,13,16] = 410 + 513 + 6*16 = 201
- *Ligne 2 × Colonne 2**  
[4,5,6] × [11,14,17] = 411 + 514 + 6*17 = 216

---

## Résultat final
A × B = [[84, 90],
        [201, 216]]