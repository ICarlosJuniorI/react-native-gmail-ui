import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacityProps, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { colors } from "@/styles/colors";

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export function FloatButton({ icon, ...rest }: FloatButtonProps) {
  return (
    <View className="px-4 py-3 bg-gray-600 rounded-full absolute bottom-4 right-4">
      <TouchableOpacity
        activeOpacity={0.7}
        {...rest}
      >
        <View className="flex-row items-center gap-1">
          {icon && (
            <MaterialIcons
              name={icon}
              size={22}
              color={colors.orange[600]}
            />
          )}

          <Text className="font-subtitle text-orange-600">
            Escrever
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}