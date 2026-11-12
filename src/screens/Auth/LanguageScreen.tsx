import React, { useState } from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Platform,
  Image,
  ScrollView
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../constants/routes';
import { COLORS } from '../../constants/colors';
import mmkvService from '../../services/storage/mmkvService';
import { STORAGE_KEYS } from '../../constants/storageKeys';
import { useAppSelector } from '../../redux/hooks';
import { useThemePalette } from '../../utils/theme';

const { width } = Dimensions.get('window');

const LANGUAGES = [
  { id: 'hi', name: 'हिन्दी', native: 'हिन्दी', englishName: 'HINDI' },
  { id: 'en', name: 'English', native: 'English', englishName: 'ENGLISH' },
  { id: 'te', name: 'తెలుగు', native: 'తెలుగు', englishName: 'TELUGU' },
  { id: 'kn', name: 'ಕನ್ನಡ', native: 'ಕನ್ನಡ', englishName: 'KANNADA' },
  { id: 'ta', name: 'தமிழ்', native: 'தமிழ்', englishName: 'TAMIL' },
  { id: 'bn', name: 'বাংলা', native: 'বাংলা', englishName: 'BENGALI' },
  { id: 'mr', name: 'मराठी', native: 'मराठी', englishName: 'MARATHI' },
  { id: 'ml', name: 'മലയാളം', native: 'മലയാളം', englishName: 'MALAYALAM' },
];

const LanguageScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const isChanging = route.params?.isChanging;
  const [selectedLang, setSelectedLang] = useState('en');
  const { palette, mode } = useThemePalette();
  const isDark = mode === 'dark';
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const insets = useSafeAreaInsets();

  React.useEffect(() => {
    if (isChanging || !isAuthenticated) return;
    const hasLang = mmkvService.getString(STORAGE_KEYS.LANGUAGE);
    if (hasLang) {
      const isOnboardingComplete = mmkvService.getBoolean(STORAGE_KEYS.ONBOARDING_COMPLETE);
      const isProfileSetup = mmkvService.getBoolean(STORAGE_KEYS.PROFILE_SETUP_COMPLETE);
      const isDlUploaded = mmkvService.getBoolean(STORAGE_KEYS.DL_UPLOADED);

      if (!isProfileSetup) {
        navigation.reset({
          index: 0,
          routes: [{ name: ROUTES.PROFILE_SETUP }]
        });
      } else if (!isDlUploaded) {
        navigation.reset({
          index: 0,
          routes: [{ name: ROUTES.DL_UPLOAD }]
        });
      } else if (!isOnboardingComplete) {
        navigation.reset({
          index: 0,
          routes: [{ name: ROUTES.DOCUMENT_CENTER }]
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: ROUTES.MAIN_TABS }]
        });
      }
    }
  }, [navigation, isChanging, isAuthenticated]);

  const handleSelectLanguage = (langId: string) => {
    setSelectedLang(langId);
  };

  const handleConfirm = () => {
    mmkvService.setString(STORAGE_KEYS.LANGUAGE, selectedLang);

    if (isChanging && navigation.canGoBack()) {
      navigation.goBack();
    } else if (!isAuthenticated) {
      navigation.reset({
        index: 0,
        routes: [{ name: ROUTES.WELCOME }]
      });
    } else {
      const isOnboardingComplete = mmkvService.getBoolean(STORAGE_KEYS.ONBOARDING_COMPLETE);
      const isProfileSetup = mmkvService.getBoolean(STORAGE_KEYS.PROFILE_SETUP_COMPLETE);
      const isDlUploaded = mmkvService.getBoolean(STORAGE_KEYS.DL_UPLOADED);

      if (!isProfileSetup) {
        navigation.reset({
          index: 0,
          routes: [{ name: ROUTES.PROFILE_SETUP }]
        });
      } else if (!isDlUploaded) {
        navigation.reset({
          index: 0,
          routes: [{ name: ROUTES.DL_UPLOAD }]
        });
      } else if (!isOnboardingComplete) {
        navigation.reset({
          index: 0,
          routes: [{ name: ROUTES.DOCUMENT_CENTER }]
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: ROUTES.MAIN_TABS }]
        });
      }
    }
  };

  const selectedLanguageData = LANGUAGES.find(l => l.id === selectedLang) || LANGUAGES[1];

  return (
    <SafeAreaView className="flex-1 bg-brandBlue dark:bg-darkBg" edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Image
        source={require('../../assets/images/maxify_captain.png')}
        className="absolute inset-0 w-full h-full"
        resizeMode="cover"
      />

      {/* Back Button */}
      <View
        className="absolute left-5 z-10"
        style={{ top: insets.top }}
      >
        <TouchableOpacity
          className="w-11 h-11 rounded-full bg-lightBg dark:bg-darkCard justify-center items-center shadow elevation-3"
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Icon name="arrow-back" size={24} color={palette.text} />
        </TouchableOpacity>
      </View>
      {/* Top Background & Phone Mockup */}
      <View className="h-[42%] justify-center items-center relative overflow-hidden mt-5">
        {/* Large Semi-Transparent Background Text */}
        <Text
          className="absolute text-[70px] font-black text-white/[0.07] tracking-[4px] text-center w-full"
          style={{ top: Platform.OS === 'ios' ? 70 : 40 }}
          numberOfLines={1}
        >
          {selectedLanguageData.englishName}
        </Text>




      </View>

      {/* Bottom Select App Language Panel */}
      <View
        className="flex-1 bg-lightBg dark:bg-darkBg rounded-t-[28px] px-5 pt-6 border-t border-lightBorder dark:border-darkBorder"
      >
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: Math.max(insets.bottom, 16) + 12
          }}
        >
          <Text className="text-[21px] font-extrabold text-textLight dark:text-textDark text-center mb-5">Select App Language</Text>

          {/* Grid of Languages */}
          <View className="flex-row flex-wrap justify-between gap-3 mb-6">
            {LANGUAGES.map((lang) => {
              const isSelected = selectedLang === lang.id;
              return (
                <TouchableOpacity
                  key={lang.id}
                  className={`w-[48%] rounded-2xl border-[1.5px] py-3.5 px-3.5 flex-row items-center justify-between shadow-sm elevation-1 ${isSelected
                    ? 'border-transparent'
                    : 'border-lightBorder dark:border-darkBorder bg-lightBg dark:bg-darkCard'
                    }`}
                  style={isSelected ? { backgroundColor: palette.primary } : undefined}
                  onPress={() => handleSelectLanguage(lang.id)}
                  activeOpacity={0.9}
                >
                  <View className="flex-1 justify-center">
                    <Text className={`text-[17px] font-bold ${isSelected ? 'text-white' : 'text-textLight dark:text-textDark'}`}>
                      {lang.name}
                    </Text>
                    <Text className={`text-[10px] -mt-0.5 tracking-[0.5px] ${isSelected ? 'text-white/70' : 'text-textLightSecondary dark:text-textDarkSecondary'}`}>
                      ...........................
                    </Text>
                  </View>

                  {/* Custom Radio Button */}
                  <View className={`w-[22px] h-[22px] rounded-full border-2 justify-center items-center ml-1.5 ${isSelected ? 'border-white' : 'border-lightBorder dark:border-darkBorder'
                    }`}>
                    {isSelected && <View className="w-2.5 h-2.5 rounded-full bg-white" />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>

        {/* Continue Button — outside ScrollView so it's always visible */}
        <TouchableOpacity
          className="rounded-xl py-4 items-center justify-center shadow elevation-2"
          style={{ backgroundColor: palette.primary, marginTop: 16, marginBottom: Math.max(insets.bottom, 12) }}
          onPress={handleConfirm}
          activeOpacity={0.9}
        >
          <Text className="text-white text-base font-extrabold">Confirm & Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;
