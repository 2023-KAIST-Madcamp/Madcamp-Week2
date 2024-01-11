# FindMyTrip

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

![StartPage.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/58c674d9-3be9-4b6f-9832-a79e975a848e/StartPage.png)

### 주요 특징

- 카카오 계정으로 로그인할 수 있습니다.

### 2. 메인화면

![Profile.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/f2637b02-a17c-4b4a-9253-22cdc5ceaec5/Profile.png)

![Wishlist.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/a38a0b18-2861-4721-8be0-376427cb006b/Wishlist.png)

### 주요 특징

- 카카오톡 로그인을 통해 사용자 이름 및 프로필 사진을 불러올 수 있습니다.
- 여행지 추천 받기 버튼을 통해 12가지의 질문을 통해 여행지를 추천받을 수 있습니다.
- Discovery를 통해 추천 받을 수 있는 모든 여행지를 Carousel View를 통해 확인할 수 있습니다.
- Wish List를 통해 가고 싶은 장소를 저장할 수 있습니다.
- 상단 왼쪽의 버튼을 누르면 앱 내에서 로그아웃 됩니다.

### 3. 질문 페이

![Question.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/af52fafd-ed3f-4418-b1da-51432c84c927/Question.png)

### 주요 특징

- 사용자의 취향을 파악할 수 있는 질문들로 선별했습니다.
- 각 보기들은 중복선택을 불가하고 선택했을 때 Opacity 및 글자 색깔이 바뀝니다.
- 각 응답들은 2차 배열로 저장되어 여행지 추천받기를 누를 때 Backend로 전송됩니다.

### 4. 추천 페이지

![Result.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/19995971-86e1-4d9f-a1a1-feabf9790e9f/Result.png)

### 주요 특징

- Backend에서 가중치 알고리즘을 사용해서 Top3 여행지를 Frontend로 보낸 후 나열합니다.
- Animation은 lottie animation을 사용했습니다.
- 각 여행지 카드를 선택하면 디테일 페이지로 이동합니다.
- 하단의 버튼을 누르면 프로필로 이동할 수 있습니다.

### 5. 디테일 페이지

- 디테일 페이지는 명소, 리뷰, 위치의 3개의 탭을 포함하여 간단한 정보들로 구성되어 있습니다.

### (1) 명소

![Detail-touristspot.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/d3092aeb-fb12-4644-b5a3-50e20c40685b/Detail-touristspot.png)

### 주요 특징

- 3개의 명소의 정보가 제공됩니다.
- 각 명소를 클릭하면 관련 사이트로 이동합니다.

### (2) 리뷰

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/f4774e04-71ed-4592-b846-839e1fdafed1/Untitled.png)

### 주요 특징

- 리뷰를 등록하고 다른 이용자의 리뷰를 확인할 수 있습니다.
- 전체 별점이 변경됩니다.
- 리뷰를 다시 적으면 수정되고 삭제 버튼을 누르면 본인의 리뷰가 삭제됩니다.

### (3) 위치

![Detail-map.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/0dc0b092-8efd-48af-95e7-e985d2aaf9ff/Detail-map.png)

![Route.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/f6cb388f-3934-47d6-9928-26d2e10eb0fc/af753fa7-aa63-41e3-aad5-cf994a65ddd8/Route.png)

### 주요기능

- 위치 탭을 누르면 google map으로 이동합니다.
- 아래의 버튼을 누르면 각 위치로 이동할 수 있습니다.
- 국내 여행지의 경우에는 경로를 찾을 수 있습니다.

### 기술 특징

- 사용자 정보는 MongoDB에 json 형태로 id, name, profile_image, wish_places, review, star을 저장합니다
- 알고리즘에서 사용하는 가중치 정보는 backend에서 csv파일 형태로 저장하며 frontend에서 받은 응답을 바탕으로 계산을 한 후 MongoDB에 저장하며 추천 여행지 및 update된 DB정보를 frontend로 보냅니다.
- 각 카드를 눌렀을 때 frontend에서 저장한 추천 여행지 json 파일에서 필터링한 후 해당 여행지의 디테일 페이지로 이동합니다.
- Backend 서버는 AWS EC2에 배포해 nohup을 통해 백그라운드로 실행하고 있습니다.
