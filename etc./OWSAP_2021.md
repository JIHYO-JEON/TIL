# OWASP 2021 Top Ten 웹 보안 취약점

[MORE](https://nhj12311.tistory.com/524)

### 1. Broken Access Control (접근 권한 취약점)

액세스 제어는 사용자가 권한을 벗어나 행동할 수 없도록 정책을 시행한다. 만약 액세스 제어가 취약하면 사용자는 주어진 권한을 벗어나 모든 데이터를 무단으로 열람∙수정 혹은 삭제 행위로 이어질 수 있다.

### 2. Cryptographic Failures (암호화 오류)

민감 데이터 노출의 명칭이 2021년 ‘Cryptographic Failures(암호화 오류)’로 변경되었다. 적절한 암호화가 이루어지지 않으면 민감 데이터가 노출될 수 있다.

### 3. Injection (인젝션) <- 2017년 1위

SQL, NoSQL, OS 명령, ORM(Object Relational Mapping), LDAP, EL(Expression Language) 또는 OGNL(Object Graph Navigation Library) 인젝션 취약점은 신뢰할 수 없는 데이터가 명령어나 쿼리문의 일부분으로써, 인터프리터로 보내질 때 취약점이 발생한다.

### 4. Insecure Design (안전하지 않은 설계)

안전하지 않은 설계는 누락되거나 비효율적인 제어 설계로 표현되는 다양한 취약점을 나타내는 카테고리다. 안전하지 않은 설계와 안전하지 않은 구현에는 차이가 있지만, 안전하지 않은 설계에서 취약점으로 이어지는 구현 결함이 있을 수 있다.

### 5. Security Misconfiguration (보안설정오류)

애플리케이션 스택의 적절한 보안 강화가 누락되었거나 클라우드 서비스에 대한 권한이 적절하지 않게 구성되었을 때, 불필요한 기능이 활성화 되거나 설치되었을 때, 기본계정 및 암호화가 변경되지 않았을 때, 지나치게 상세한 오류 메시지를 노출할 때, 최신 보안기능이 비활성화 되거나 안전하지 않게 구성되었을 때 발생한다.

### 6. Vulnerable and Outdated Components (취약하고 오래된 요소)

취약하고 오래된 요소는 지원이 종료되었거나 오래된 버전을 사용할 때 발생한다. 이는 애플리케이션뿐만 아니라, DBMS, API 및 모든 구성요소 들이 포함된다.

### 7. Identification and Authentication Failures (식별 및 인증 오류)

취약한 인증으로 알려졌던 해당 취약점은 식별 실패까지 포함해 더 넓은 범위를 포함할 수 있도록 변경되었다. 사용자의 신원확인, 인증 및 세션관리가 적절히 되지 않을 때 취약점이 발생할 수 있다.

### 8. Software and Data Integrity Failures(소프트웨어 및 데이터 무결성 오류)

2021년 새롭게 등장한 카테고리다. 무결성을 확인하지 않고 소프트웨어 업데이트, 중요 데이터 및 CI/CD 파이프라인과 관련된 가정을 하는데 중점을 둔다.

### 9. Security Logging and Monitoring Failures (보안 로깅 및 모니터링 실패)

불충분한 로깅 및 모니터링 명칭이었던 카테고리가 보안 로깅 및 모니터링 실패로 변경되었다. 로깅 및 모니터링 없이는 공격활동을 인지할 수 없다. 이 카테고리는 진행중인 공격을 감지 및 대응하는데 도움이 된다.

### 10. Server-Side Request Forgery (서버 측 요청 위조)

2021년 새롭게 등장했다. SSRF 결함은 웹 애플리케이션이 사용자가 제공한 URL의 유효성을 검사하지 않고 원격 리소스를 가져올 때마다 발생한다. 이를 통해 공격자는 방화벽, VPN 또는 다른 유형의 네트워크 ACL(액세스 제어 목록)에 의해 보호되는 경우에도 응용 프로그램이 조작된 요청을 예기치 않은 대상으로 보내도록 강제할 수 있다.