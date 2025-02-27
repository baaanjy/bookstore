## Blue Book Store

온라인 서점 어플리케이션입니다. <br/>

📚 http://bookstore-bucket.s3-website-ap-southeast-2.amazonaws.com/


### 📌 주요 서비스
- 책 등록/수정/삭제
- 책 조회: 정렬, 검색
  
### 📄 상세 내용
#### RESTful API
- `/books` `GET`: 책 전체 조회
- `/books/:id` `GET`: 특정 책 조회
- `/books` `POST`: 책 신규 등록
- `/books/:id` `PUT`: 책 정보 수정
- `/books/:id` `DELETE`: 책 삭제
#### 백엔드 계층 분리
- `Routes`, `Controller`, `Service`로 구조화
#### 페이지 네이션 / 정렬 / 검색
- 전체 데이터 개수에 따라 페이지네이션 설정
- 현재 페이지를 기준으로 데이터 요청
- `/books` `GET` 요청시 정렬 옵션과 검색 옵션 함께 전달하요 조회
#### 반응형 디자인


<br/>

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
