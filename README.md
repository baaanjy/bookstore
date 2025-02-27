## Blue Book Store

온라인 서점 어플리케이션입니다. <br/>

📚 http://bookstore-bucket.s3-website-ap-southeast-2.amazonaws.com/


### 📌 주요 서비스
- 책 등록/수정/삭제
- 책 조회: 정렬, 검색

### 🔧 기술 스택
- 프로그래밍 언어: JavaScript, TypeScript
- 프레임워크 및 라이브러리: React, Axios, React-hook-form
- 스타일링: TailwindCss, Shadcn/ui
- 기타: Vite, Node.js, MongoDB, AWS EC2, AWS S3

### 🔍 미리 보기

|조회|
|---|
|![1](https://github.com/user-attachments/assets/4349c6ab-c91e-4049-ae1e-eaea4e8b54bb)|

|등록|
|---|
|![2](https://github.com/user-attachments/assets/1b4ddc74-fd81-486b-9209-84e9344894aa)|

|수정, 삭제|
|-------|
|![3](https://github.com/user-attachments/assets/75a0e9ee-ca8e-47b9-9c8a-8836bf2ff5b9)|

### 🧑‍💻 로컬에서 실행하기
백엔드 환경변수 설정(`/backend/.env`) 및 실행 (`cd backend` `npm run dev`)
```
DB_URI="mongodb://<user-name>:<pw>@<ip>:27017/<db-name>?authSource=admin"
EXPRESS_PORT=3000
FRONT_URL="http://localhost:5173"
```
프론트엔드 환경변수 설정(`/frontend/.env`) 및 실행(`cd frontend` `npm run dev`)
```
VITE_BASE_URL=http://localhost:3000
```

### 👤 Developer
<a href="https://github.com/baaanjy"> 🔗 baaanjy</a>
