# FindMyTrip

### KAIST MadCamp Week2

---

## a. 개발 팀원

- 박진석 - 성균관대학교 소프트웨어학과 20학번
- 이수민 - 카이스트 전산학부 21학번

---

## b. 개발환경

- Language : Javascript, Python
- Framework : React Native, Flask
- Database : MongoDB
- Deployment : AWS EC2
- OS : Android
- IDE : Visual Studio Code
- Target Device : Samsung Flip 4

---

## c. 어플리케이션 소개

### 1. 로딩창

![StartPage](https://github.com/KAIST-MadCamp-Week2/TravelApp/assets/149778119/1c8d2dd4-6c1f-44c2-b711-829166011ada)

### 주요 특징

- 카카오 계정으로 로그인할 수 있습니다.

### 2. 메인화면

![Profile](https://github.com/KAIST-MadCamp-Week2/TravelApp/assets/149778119/f73a9a27-7e0e-4b7e-a305-65fccdfc1232)

![Wishlist](https://github.com/KAIST-MadCamp-Week2/TravelApp/assets/149778119/d8389324-22f5-4e63-8b8b-178666c50de4)

### 주요 특징

- 카카오톡 로그인을 통해 사용자 이름 및 프로필 사진을 불러올 수 있습니다.
- 여행지 추천 받기 버튼을 통해 12가지의 질문을 통해 여행지를 추천받을 수 있습니다.
- Discovery를 통해 추천 받을 수 있는 모든 여행지를 Carousel View를 통해 확인할 수 있습니다.
- Wish List를 통해 가고 싶은 장소를 저장할 수 있습니다.
- 상단 왼쪽의 버튼을 누르면 앱 내에서 로그아웃 됩니다.

### 3. 질문 페이

![Question](https://github.com/KAIST-MadCamp-Week2/TravelApp/assets/149778119/e28b0382-dd71-43de-ad1d-9b2347fc0869)

### 주요 특징

- 사용자의 취향을 파악할 수 있는 질문들로 선별했습니다.
- 각 보기들은 중복선택을 불가하고 선택했을 때 Opacity 및 글자 색깔이 바뀝니다.
- 각 응답들은 2차 배열로 저장되어 여행지 추천받기를 누를 때 Backend로 전송됩니다.

### 4. 추천 페이지

![Result](https://github.com/KAIST-MadCamp-Week2/TravelApp/assets/149778119/1062703a-459c-4722-8044-565f8dc5882c)

### 주요 특징

- Backend에서 가중치 알고리즘을 사용해서 Top3 여행지를 Frontend로 보낸 후 나열합니다.
- Animation은 lottie animation을 사용했습니다.
- 각 여행지 카드를 선택하면 디테일 페이지로 이동합니다.
- 하단의 버튼을 누르면 프로필로 이동할 수 있습니다.

### 5. 디테일 페이지

- 디테일 페이지는 명소, 리뷰, 위치의 3개의 탭을 포함하여 간단한 정보들로 구성되어 있습니다.

### (1) 명소

![Detail-touristspot](https://github.com/KAIST-MadCamp-Week2/TravelApp/assets/149778119/8accf69b-e141-46ab-9895-572cf9d44065)

### 주요 특징

- 3개의 명소의 정보가 제공됩니다.
- 각 명소를 클릭하면 관련 사이트로 이동합니다.

### (2) 리뷰

![Detail-review](https://github.com/KAIST-MadCamp-Week2/TravelApp/assets/149778119/f53315a1-4800-4332-928b-4f720f944100)

### 주요 특징

- 리뷰를 등록하고 다른 이용자의 리뷰를 확인할 수 있습니다.
- 전체 별점이 변경됩니다.
- 리뷰를 다시 적으면 수정되고 삭제 버튼을 누르면 본인의 리뷰가 삭제됩니다.

### (3) 위치

![Detail-map](https://github.com/KAIST-MadCamp-Week2/TravelApp/assets/149778119/aed31a6f-76cd-44e6-8bfc-ad16bee1cd65)

![Route](https://github.com/KAIST-MadCamp-Week2/TravelApp/assets/149778119/99bebfd8-2dbc-4a2e-b125-8bac3f9ac519)

### 주요기능

- 위치 탭을 누르면 google map으로 이동합니다.
- 아래의 버튼을 누르면 각 위치로 이동할 수 있습니다.
- 국내 여행지의 경우에는 경로를 찾을 수 있습니다.

### 기술 특징

- 사용자 정보는 MongoDB에 json 형태로 id, name, profile_image, wish_places, review, star을 저장합니다
- 알고리즘에서 사용하는 가중치 정보는 backend에서 csv파일 형태로 저장하며 frontend에서 받은 응답을 바탕으로 계산을 한 후 MongoDB에 저장하며 추천 여행지 및 update된 DB정보를 frontend로 보냅니다.
- 각 카드를 눌렀을 때 frontend에서 저장한 추천 여행지 json 파일에서 필터링한 후 해당 여행지의 디테일 페이지로 이동합니다.
- Backend 서버는 AWS EC2에 배포해 nohup을 통해 백그라운드로 실행하고 있습니다.
