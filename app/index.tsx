import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center p-6 bg-gray-50">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Tailwind CSS 예제 앱</Text>
      <Text className="text-gray-600 text-center mb-8">
        Expo와 Tailwind CSS(NativeWind)를 사용한 UI 컴포넌트 예제입니다.
      </Text>

      <Link href="/tailwind-example" asChild>
        <TouchableOpacity className="bg-purple-600 rounded-xl px-6 py-3 shadow-md">
          <Text className="text-white font-bold text-lg">예제 페이지 보기</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
