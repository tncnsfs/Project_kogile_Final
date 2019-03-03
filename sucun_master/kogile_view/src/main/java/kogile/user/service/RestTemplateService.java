package kogile.user.service;

import java.util.HashMap;
import java.util.Map;

import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;
import com.google.gson.internal.LinkedTreeMap;

@Service
// RestTemplateService, RestTemplate�� �̱����̴�.
public class RestTemplateService {
	private static RestTemplateService restService;
	private static RestTemplate restTemplate;

	private RestTemplateService() {}

	private static final String REDIRECT_URI = "http://localhost:8082/login/external/kakaoOauth";
	private static final String REST_API = "e16764ac8ecc77d571c58088d37b119b";
	private static final String ADMIN_KEY = "";

	//restTemplate �ʱ⼳��, SingletonePattern���� ����
	public static RestTemplateService getInstance() {
		if (restService == null) {

			HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();
			factory.setReadTimeout(5000);
			factory.setConnectTimeout(3000);
			HttpClient httpClient = HttpClientBuilder.create().setMaxConnTotal(100).setMaxConnPerRoute(5).build(); // connectionpoll
			factory.setHttpClient(httpClient); // ������࿡ ���� HttpClient ����
			restTemplate = new RestTemplate(factory);

			restService = new RestTemplateService();
		}
		return restService;
	}

	public String getAccessToken(String code) {
		String url = "https://kauth.kakao.com/oauth/token";
		MultiValueMap<String, String> parameters = new LinkedMultiValueMap<>();

		parameters.add("grant_type", "authorization_code");
		parameters.add("client_id", REST_API);
		parameters.add("redirect_uri", REDIRECT_URI);
		parameters.add("code", code);

		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-Type", "application/x-www-form-urlencoded");

		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(parameters, headers);
		String responseJson = restTemplate.postForObject(url, request, String.class);

		Gson gson = new Gson();
		Map<String, String> response = gson.fromJson(responseJson, Map.class);
		String accessToken = response.get("access_token");
		System.out.println(accessToken);
		return accessToken;
	}

	public Map<String, Object> getKakaoMemInfo(String accessToken) {

		String url = "https://kapi.kakao.com/v2/user/me";

		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", "Bearer " + accessToken);
		headers.set("Content-Type", "application/x-www-form-urlencoded");

		HttpEntity<String> request = new HttpEntity<>(headers);
		String responseJson = restTemplate.postForObject(url, request, String.class);
		System.out.println(responseJson);
		Gson gson = new Gson();
		Map<String, Object> response = gson.fromJson(responseJson, Map.class);

		return response;
	}

	public void logOut(String accessToken) {
		String url = "https://kapi.kakao.com/v1/user/logout";

		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", "Bearer " + accessToken);

		HttpEntity<String> request = new HttpEntity<>(headers);
		restTemplate.postForObject(url, request, String.class);
		
	}

	// ȸ��Ż��
	// POST /v1/user/unlink HTTP/1.1
	// Host: kapi.kakao.com
	// Authorization: Bearer {access_token}

	// �α��ν� DB�� AccessToken �����Ѵ�.
	// ���Ŀ� � ������ �Ҷ����� AccessToken�� ��ȿ���� Ȯ���Ѵ�.
	// �����ڵ尡 200�ΰ�� 401����.
	// GET /v1/user/access_token_info HTTP/1.1
	// Host: kapi.kakao.com
	// Authorization: Bearer {access_token}
	// Content-type: application/x-www-form-urlencoded;charset=utf-8

}
