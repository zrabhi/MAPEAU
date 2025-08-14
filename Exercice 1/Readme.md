# Schéma de la base de données (Version simple)

## Collections

### 1. userInfos  (Utilisateurs enregistrés)
userInfos
└── u_123
├─ userId: "user_123"
├─ firstName: "zakaria"
├─ lastName: "rabhi"
├─ phone: "+212XXXXXXXXX"
├─ email: "zakaria@example.com"
├─ createdAt
└─ updatedAt


### 2. proUsers (Comptes professionnels)

proUsers
└── pro_789
├─ proUserId: "pro_789"
├─ name: "proName"
├─ contactEmail
├─ createdAt
└─ active

### 3. photos (Photos & Diagnostics)
photos
├── ph_001
│ ├─ photoId: "ph_001"
│ ├─ diagnosticPhotoUrl
│ ├─ takenAt
│ ├─ capturedById: "user_123"
│ ├─ targetInfo
│ │ ├─ firstName
│ │ ├─ lastName
│ │ └─ phone
│ ├─ createdAt
│ ├─ updatedAt
│ └─ diagnostics
│ └─ diag_1001
│ ├─ diagnosticId
│ ├─ diagnosedById
│ ├─ scores (p1, p2, p3, p4, p5)
│ ├─ recommendationBarcode
│ ├─ productSnapshot (name, brand, category)
│ └─ createdAt
└── ph_002
├─ photoId: "ph_002"
├─ capturedById: "pro_789"
└─ diagnostics ...