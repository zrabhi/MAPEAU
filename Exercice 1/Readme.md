userInfos (collection)                  <-- Registered users
│
└── u_123 (document)
      ├── userId: "user_123"              // Registered user ID
      ├── firstName: "zakaria"
      ├── lastName: "rabhi"
      ├── phone: "+212XXXXXXXXX"
      ├── email: "zakaria@example.com"
      ├── createdAt
      └── updatedAt

proUsers (collection)                   <-- Professional accounts
│
└── pro_789 (document)
      ├── proUserId: "pro_789"         // Pro account ID
      ├── name: "proName"              // Professional's display name (individual or company)
      ├── contactEmail
      ├── createdAt
      └── active

photos (collection)                     <-- Photos taken (by user or pro)
│
├── ph_001 (document)
│     ├── photoId: "ph_001"
│     ├── diagnosticPhotoUrl         // URL of the photo on the file server
│     ├── takenAt                     // Timestamp photo was taken
│     ├── capturedById: "user_123"      // Can be userId or proUserId
│     ├── targetInfo                  // Info of the person in the photo (unregistered user)
│     │     ├── firstName
│     │     ├── lastName
│     │     └── phone
│     ├── createdAt
│     ├── updatedAt
│     └── diagnostics (subcollection) // Keeps **history of diagnostics** for this photo
│           └── diag_1001 (document)
│                 ├── diagnosticId
│                 ├── diagnosedById   // Who performed the diagnostic (user or pro)
│                 ├── scores
│                 │     ├── p1
│                 │     ├── p2
│                 │     ├── p3
│                 │     ├── p4
│                 │     └── p5
│                 ├── recommendationBarcode
│                 ├── productSnapshot  // Snapshot of recommended product at time of diagnostic
│                 │     ├── name
│                 │     ├── brand
│                 │     └── category
│                 └── createdAt
│
└── ph_002 (document)
      ├── photoId: "ph_002"
      ├── diagnosticPhotoUrl
      ├── takenAt
      ├── capturedById: "pro_789"      // Professional captured this photo
      ├── targetInfo                  // Unregistered user
      │     ├── firstName
      │     ├── lastName
      │     └── phone
      ├── createdAt
      ├── updatedAt
      └── diagnostics (subcollection)
            └── diag_1002 (document)
                  ├── diagnosticId
                  ├── diagnosedById
                  ├── scores
                  │     ├── p1
                  │     ├── p2
                  │     ├── p3
                  │     ├── p4
                  │     └── p5
                  ├── recommendationBarcode
                  ├── productSnapshot
                  │     ├── name
                  │     ├── brand
                  │     └── category
                  └── createdAt
