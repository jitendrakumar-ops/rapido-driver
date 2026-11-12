import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../../components/ScreenHeader';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '../../redux/hooks';
import { COLORS } from '../../constants/colors';

const TermsOfServiceScreen: React.FC = () => {
  const navigation = useNavigation();
  const isDark = useAppSelector(s => s.theme.isDark);

  return (
    <SafeAreaView className="flex-1 bg-lightBg dark:bg-darkBg">
      <ScreenHeader title="Terms of Service" />

      <ScrollView className="p-4" showsVerticalScrollIndicator={false}>

        {/* Acceptance of Terms */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-emerald-500/10 items-center justify-center mr-2">
              <Icon name="checkmark-circle-outline" size={14} color="#059669" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">Acceptance of Terms (नियम एवं शर्तों की स्वीकृति)</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-3">
            By registering or using the GoDrop Partner App, you agree to these Terms & Conditions.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            GoDrop Partner App पर रजिस्टर या इसका उपयोग करके, आप इन नियम एवं शर्तों से सहमत होते हैं।

          </Text>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-3">
            You also agree to follow all applicable laws and GoDrop policies.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            आप सभी लागू कानूनों और GoDrop की नीतियों का पालन करने के लिए भी सहमत होते हैं।

          </Text>
        </View>

        {/* Section 1: Eligibility & Verification */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-blue-500/10 items-center justify-center mr-2">
              <Icon name="person-outline" size={14} color="#3B82F6" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">2. Partner Eligibility (पार्टनर की पात्रता)</Text>
          </View>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-3">
            • The Partner must provide accurate and complete information.{"\n"}
            • The Partner must have a valid Driving Licence and valid vehicle documents.{"\n"}
            • The Partner must complete GoDrop's verification process.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            • पार्टनर को सही और पूरी जानकारी प्रदान करनी होगी।{"\n"}
            • पार्टनर के पास वैध ड्राइविंग लाइसेंस और वाहन के वैध दस्तावेज होने चाहिए।{"\n"}
            • पार्टनर को GoDrop की सत्यापन प्रक्रिया पूरी करनी होगी।

          </Text>
        </View>

        {/* Section 2: Code of Conduct */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-amber-500/10 items-center justify-center mr-2">
              <Icon name="warning-outline" size={14} color="#D97706" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">3. Partner Account (पार्टनर अकाउंट)</Text>
          </View>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            • The Partner must keep the GoDrop Partner account and OTP confidential.{"\n"}
            • The Partner must not allow another person to use their account.
          </Text>

          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            • पार्टनर को अपने GoDrop Partner अकाउंट और OTP को गोपनीय रखना होगा।{"\n"}
            • पार्टनर किसी अन्य व्यक्ति को अपने अकाउंट का उपयोग करने की अनुमति नहीं देगा।
          </Text>
        </View>

        {/* Section 3: Earnings & Fees */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-emerald-500/10 items-center justify-center mr-2">
              <Icon name="wallet-outline" size={14} color="#059669" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">4. Ride Acceptance (राइड स्वीकार करना)</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-3">
            • After accepting a ride, the Partner should proceed to the pickup location.{"\n"}
            • The Partner must start and complete the ride through the GoDrop App.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            • राइड स्वीकार करने के बाद पार्टनर को पिकअप स्थान पर जाना चाहिए।{"\n"}
            • पार्टनर को GoDrop App के माध्यम से राइड शुरू और पूरी करनी होगी।
          </Text>
        </View>

        {/* Section 4: Account Suspension */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="ban-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">5. Fare and Earnings (किराया और कमाई
              )</Text>
          </View>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            • The fare and Partner earnings will be calculated according to the applicable GoDrop fare structure.{"\n"}
            • Extra distance, waiting time and additional stops may result in additional charges where applicable.{"\n"}
            • The Partner must not demand any unauthorised additional payment from the Guest.
          </Text>

          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            • किराया और पार्टनर की कमाई GoDrop की लागू किराया संरचना के अनुसार निर्धारित की जाएगी।
            {"\n"}
            • जहाँ लागू हो, अतिरिक्त दूरी, वेटिंग टाइम और अतिरिक्त स्टॉप के लिए अतिरिक्त शुल्क लगाया जा सकता है।{"\n"}
            • पार्टनर Guest से कोई अनधिकृत अतिरिक्त भुगतान नहीं मांग सकता।
          </Text>
        </View>
        {/* Section 4: Account Suspension */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="ban-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">6. Cancellation (राइड कैंसिलेशन
              )</Text>
          </View>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            • The Partner should avoid unnecessary cancellation after accepting a ride.{"\n"}
            • Repeated or suspicious cancellations may result in action under GoDrop's cancellation policy.
          </Text>

          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            •राइड स्वीकार करने के बाद पार्टनर को अनावश्यक रूप से राइड कैंसिल करने से बचना चाहिए।
            {"\n"}
            • बार-बार या संदिग्ध कैंसिलेशन होने पर GoDrop की कैंसिलेशन नीति के अनुसार कार्रवाई की जा सकती है।
          </Text>
        </View>
        {/* Section 4: Account Suspension */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="ban-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">7. Guest Safety and Conduct (Guest की सुरक्षा और व्यवहार
              )</Text>
          </View>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            • The Partner must behave respectfully and professionally with every Guest.{"\n"}
            • The Partner must not harass, threaten or abuse any Guest.{"\n"}
            • The Partner must not drive dangerously or recklessly.
          </Text>

          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            • पार्टनर को प्रत्येक Guest के साथ सम्मानजनक और पेशेवर व्यवहार करना होगा।            {"\n"}
            • पार्टनर किसी भी Guest को परेशान, धमकी या दुर्व्यवहार नहीं कर सकता।{"\n"}
            • पार्टनर खतरनाक या लापरवाही से वाहन नहीं चला सकता।
          </Text>
        </View>

        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="ban-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">8. Vehicle Responsibility (वाहन की जिम्मेदारी
              )</Text>
          </View>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            • The Partner is responsible for maintaining the vehicle in safe and roadworthy condition.{"\n"}
            • All required vehicle documents, insurance and permits must remain valid.
          </Text>

          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            • पार्टनर वाहन को सुरक्षित और सड़क पर चलने योग्य स्थिति में रखने के लिए जिम्मेदार होगा।          {"\n"}
            • सभी आवश्यक वाहन दस्तावेज, बीमा और परमिट वैध होने चाहिए।
          </Text>
        </View>
        {/* ss */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="ban-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">9. GPS and Location (GPS और लोकेशन
              )</Text>
          </View>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            • GoDrop may use the Partner's location while the Partner is online or providing a ride.{"\n"}
            • Location may be used for ride matching, navigation, safety and fare calculation.
          </Text>

          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            • जब पार्टनर ऑनलाइन हो या राइड प्रदान कर रहा हो, तब GoDrop पार्टनर की लोकेशन का उपयोग कर सकता है।         {"\n"}
            • लोकेशन का उपयोग राइड मैचिंग, नेविगेशन, सुरक्षा और किराया निर्धारित करने के लिए किया जा सकता है।
          </Text>
        </View>
        {/* ss */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="ban-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">10. Fraud and Misuse (धोखाधड़ी और दुरुपयोग
              )</Text>
          </View>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            • Fake rides, GPS manipulation, fake documents or payment fraud are prohibited.{"\n"}
            • GoDrop may suspend or terminate an account for serious violations.
          </Text>

          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            • फर्जी राइड, GPS में छेड़छाड़, फर्जी दस्तावेज या भुगतान संबंधी धोखाधड़ी प्रतिबंधित है।        {"\n"}
            • गंभीर उल्लंघन होने पर GoDrop अकाउंट को निलंबित या समाप्त कर सकता है।
          </Text>
        </View>
        {/* ss */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="ban-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">11. Suspension and Termination (निलंबन और अकाउंट समाप्ति
              )</Text>
          </View>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            • GoDrop may suspend, restrict or terminate the Partner account in accordance with applicable law and these Terms.
          </Text>

          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            • GoDrop लागू कानून और इन नियमों के अनुसार पार्टनर अकाउंट को निलंबित, प्रतिबंधित या समाप्त कर सकता है।
          </Text>
        </View>
        {/* ss */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="ban-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">12. Partner Declaration (पार्टनर की घोषणा
              )</Text>
          </View>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            • By selecting “I Agree”, the Partner confirms that the information and documents provided are true and valid.{"\n"}
            • The Partner confirms that they have read and understood these Terms & Conditions.
          </Text>

          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            • “I Agree” का चयन करके पार्टनर पुष्टि करता है कि उसके द्वारा दी गई जानकारी और दस्तावेज सही और वैध हैं।{"\n"}
            • पार्टनर पुष्टि करता है कि उसने इन नियम एवं शर्तों को पढ़ और समझ लिया है।
          </Text>
        </View>



      </ScrollView>
    </SafeAreaView>
  );
};

export default TermsOfServiceScreen;

