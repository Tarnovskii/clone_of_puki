package media.acses.teacherswebsite.security.jwt;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class JwtStorage {

    private static Map<String, String> tokensMap = new HashMap<>();

    public static Map<String, String> getTokens() {
        return new HashMap<>(tokensMap);
    }

    public static String getTokenByAddr(String addr) {
        Set<String> tokens = tokensMap.keySet();
        for (String token: tokens) {
            if (tokensMap.get(token).equals(addr)) {
                return token;
            }
        }
        return null;
    }

    public static void addToken(String token, String addr) {
        tokensMap.put(token, addr);
    }

    public static boolean containsAddr(String addr) {
        if (tokensMap.containsValue(addr)) {
            return true;
        }
        return false;
    }

    public static boolean containsToken(String token) {
        if (tokensMap.containsKey(token)) {
            return true;
        }
        return false;
    }

    public static void removeToken(String token) {
        tokensMap.remove(token);
    }
}
