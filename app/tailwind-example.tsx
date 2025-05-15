import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function TailwindExample() {
    return (
        <ScrollView className="flex-1 bg-gray-100">
            <StatusBar style="dark" />

            {/* 헤더 섹션 */}
            <View className="p-6 bg-purple-600">
                <Text className="text-3xl font-bold text-white">Tailwind CSS 예제</Text>
                <Text className="text-white mt-2 opacity-80">Expo와 NativeWind로 구현한 UI 컴포넌트</Text>
            </View>

            {/* 카드 섹션 */}
            <View className="p-4">
                <Text className="text-xl font-semibold mb-4 text-gray-800">카드 컴포넌트</Text>

                <View className="bg-white rounded-xl p-5 shadow-md mb-4">
                    <Text className="text-lg font-bold text-gray-800">기본 카드</Text>
                    <Text className="text-gray-600 mt-2">이것은 기본 카드 컴포넌트입니다.</Text>
                    <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg mt-4">
                        <Text className="text-white text-center font-semibold">버튼</Text>
                    </TouchableOpacity>
                </View>

                <View className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-5 shadow-md">
                    <Text className="text-lg font-bold text-white">그라데이션 카드</Text>
                    <Text className="text-white mt-2 opacity-90">배경에 그라데이션이 적용된 카드입니다.</Text>
                    <TouchableOpacity className="bg-white px-4 py-2 rounded-lg mt-4">
                        <Text className="text-purple-600 text-center font-semibold">자세히 보기</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* 버튼 섹션 */}
            <View className="p-4">
                <Text className="text-xl font-semibold mb-4 text-gray-800">버튼 스타일</Text>

                <View className="flex-row flex-wrap justify-between mb-4">
                    <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-lg mb-2">
                        <Text className="text-white font-semibold">기본</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-green-500 px-6 py-3 rounded-lg mb-2">
                        <Text className="text-white font-semibold">성공</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-red-500 px-6 py-3 rounded-lg mb-2">
                        <Text className="text-white font-semibold">경고</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row flex-wrap justify-between">
                    <TouchableOpacity className="border-2 border-blue-500 px-6 py-3 rounded-lg">
                        <Text className="text-blue-500 font-semibold">아웃라인</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-gray-800 px-6 py-3 rounded-lg">
                        <Text className="text-white font-semibold">다크</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="bg-gray-200 px-6 py-3 rounded-lg">
                        <Text className="text-gray-800 font-semibold">라이트</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* 폼 요소 섹션 */}
            <View className="p-4 mb-10">
                <Text className="text-xl font-semibold mb-4 text-gray-800">텍스트 스타일링</Text>

                <View className="bg-white rounded-xl p-5 shadow-md">
                    <Text className="text-3xl font-bold text-gray-900 mb-2">큰 제목</Text>
                    <Text className="text-2xl font-semibold text-gray-800 mb-2">중간 제목</Text>
                    <Text className="text-xl font-medium text-gray-700 mb-2">작은 제목</Text>
                    <Text className="text-base text-gray-600 mb-2">기본 텍스트</Text>
                    <Text className="text-sm text-gray-500 mb-2">작은 텍스트</Text>
                    <Text className="text-xs text-gray-400">아주 작은 텍스트</Text>
                </View>
            </View>
        </ScrollView>
    );
}
