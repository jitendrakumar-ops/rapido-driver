import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../../components/ScreenHeader';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppSelector } from '../../redux/hooks';
import { COLORS } from '../../constants/colors';

const PrivacyPolicyScreen: React.FC = () => {
  const navigation = useNavigation();
  const isDark = useAppSelector(s => s.theme.isDark);

  return (
    <SafeAreaView className="flex-1 bg-lightBg dark:bg-darkBg">
      <ScreenHeader title="Terms of Service" />

      <ScrollView className="p-4" showsVerticalScrollIndicator={false}>

        {/* Section 1: Acceptance of Terms */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-emerald-500/10 items-center justify-center mr-2">
              <Icon name="checkmark-circle-outline" size={14} color="#059669" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">1.Introduction (परिचय)</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-3">
            GoDrop respects the privacy of its GoDrop Partners and is committed to protecting their personal information.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            GoDrop अपने GoDrop Partners की गोपनीयता का सम्मान करता है और उनकी व्यक्तिगत जानकारी की सुरक्षा के लिए प्रतिबद्ध है।
          </Text>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-3">
            This Privacy Policy explains what information we collect, why we collect it, how we use it and how we protect it.          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            यह गोपनीयता नीति बताती है कि हम कौन-सी जानकारी एकत्र करते हैं, क्यों एकत्र करते हैं, उसका उपयोग कैसे करते हैं और उसकी सुरक्षा कैसे करते हैं।          </Text>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-3">
            By registering or using the GoDrop Partner App, you acknowledge that you have read and understood this Privacy Policy.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            GoDrop Partner App पर रजिस्टर या उसका उपयोग करके, आप स्वीकार करते हैं कि आपने इस गोपनीयता नीति को पढ़ और समझ लिया है।     </Text>
        </View>

        {/* Section 2: Eligibility & Verification */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-blue-500/10 items-center justify-center mr-2">
              <Icon name="shield-checkmark-outline" size={14} color="#3B82F6" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">2. Information We Collect (हम कौन-सी जानकारी एकत्र करते हैं)</Text>
            <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
              GoDrop, GoDrop प्लेटफॉर्म के माध्यम से Partner सेवाएं प्रदान करने के लिए आवश्यक जानकारी एकत्र कर सकता है।
            </Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-1">
            Personal Information
          </Text>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-3">
            • We may collect your full name, mobile number and email address, where provided.{"\n"}
            • We may collect your profile photograph for account identification and verification.{"\n"}
            • We may collect address or other registration information where required.

          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: व्यक्तिगत जानकारी:{"\n"}
            • हम आपका पूरा नाम, मोबाइल नंबर और जहाँ उपलब्ध हो, ईमेल पता एकत्र कर सकते हैं।{"\n"}
            • हम अकाउंट की पहचान और सत्यापन के लिए आपकी प्रोफाइल फोटो एकत्र कर सकते हैं।{"\n"}
            • जहाँ आवश्यक हो, हम पता या अन्य रजिस्ट्रेशन संबंधी जानकारी एकत्र कर सकते हैं।
          </Text>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-1">
            Driving and Vehicle Documents
          </Text>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-3">
            • We may collect your Driving Licence and vehicle-related documents for verification and legal compliance.{"\n"}
            • These documents may include RC, insurance, permit, fitness certificate and other applicable documents.

          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: ड्राइविंग और वाहन संबंधी दस्तावेज:{"\n"}
            • हम सत्यापन और कानूनी अनुपालन के लिए आपका ड्राइविंग लाइसेंस और वाहन संबंधी दस्तावेज एकत्र कर सकते हैं।{"\n"}
            • इन दस्तावेजों में RC, बीमा, परमिट, फिटनेस सर्टिफिकेट और अन्य लागू दस्तावेज शामिल हो सकते हैं।
          </Text>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-1">
            Payment Information
          </Text>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-3">
            • We may collect bank account, UPI and wallet information required to process your earnings and payments.{"\n"}
            • GoDrop does not ask for your ATM PIN, UPI PIN or banking password.

          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: भुगतान संबंधी जानकारी{"\n"}
            • आपकी कमाई और भुगतान को प्रोसेस करने के लिए हम बैंक अकाउंट, UPI और वॉलेट संबंधी जानकारी एकत्र कर सकते हैं।{"\n"}
            • GoDrop आपका ATM PIN, UPI PIN या बैंकिंग पासवर्ड नहीं मांगता है।
          </Text>


        </View>

        {/* Section 3: Code of Conduct */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-4">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-amber-500/10 items-center justify-center mr-2">
              <Icon name="warning-outline" size={14} color="#D97706" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">3. 3. Location and GPS Information
            </Text>
          </View>

          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            • GoDrop may collect your real-time location when you are online or providing a ride through the GoDrop App.{"\n"}
            • Location information may be used for ride matching, navigation and trip tracking.{"\n"}
            • Location information may also be used for safety, fare calculation, customer support and fraud prevention.
          </Text>

          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: लोकेशन और GPS जानकारी{"\n"}
            • जब आप GoDrop App पर ऑनलाइन हों या राइड प्रदान कर रहे हों, तब GoDrop आपकी वास्तविक समय की लोकेशन एकत्र कर सकता है।{"\n"}
            • लोकेशन जानकारी का उपयोग राइड मैचिंग, नेविगेशन और ट्रिप ट्रैकिंग के लिए किया जा सकता है।{"\n"}
            • लोकेशन जानकारी का उपयोग सुरक्षा, किराया निर्धारित करने, Customer Support और धोखाधड़ी रोकने के लिए भी किया जा सकता है।
          </Text>
        </View>

        {/* Section 4: Earnings & Fees */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">4. Device and App Information</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            We may collect information about your mobile device and use of the GoDrop App.{"\n"}
            This may include device type, operating system, App version, IP address and technical information.{"\n"}
            This information may be used to maintain security, troubleshoot technical problems and improve the App.{"\n"}
            You can view your earnings, deductions, and payment history in the app.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: डिवाइस और App संबंधी जानकारी:{"\n"}
            हम आपके मोबाइल डिवाइस और GoDrop App के उपयोग से संबंधित जानकारी एकत्र कर सकते हैं।{"\n"}
            इसमें डिवाइस का प्रकार, ऑपरेटिंग सिस्टम, App version, IP address और तकनीकी जानकारी शामिल हो सकती है।{"\n\n"}
            इस जानकारी का उपयोग सुरक्षा बनाए रखने, तकनीकी समस्याओं को ठीक करने और App को बेहतर बनाने के लिए किया जा सकता है।
          </Text>
        </View>

        {/* Section 5: 5. Ride and Transaction Information */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">5. Ride and Transaction Information</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            GoDrop may maintain information about rides accepted, completed or cancelled by the Partner.{"\n"}
            This may include pickup and drop locations, distance, duration, fare and payment information.{"\n"}
            GoDrop may also maintain information about subscriptions, incentives, referrals, ratings and complaints.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: राइड और लेन-देन संबंधी जानकारी:{"\n"}
            GoDrop Partner द्वारा स्वीकार, पूरी या कैंसिल की गई राइड की जानकारी रख सकता है।{"\n"}
            इसमें पिकअप और ड्रॉप लोकेशन, दूरी, अवधि, किराया और भुगतान की जानकारी शामिल हो सकती है।{"\n\n"}
            GoDrop Subscription, Incentive, Referral, Rating और Complaint से संबंधित जानकारी भी रख सकता है।
          </Text>
        </View>
        {/* Section 6: How We Use Your Information */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">6. How We Use Your Information</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            We use your information to create and manage your GoDrop Partner account.{"\n"}
            We use your information to verify your identity and documents.{"\n"}
            We use your information to connect you with Guests and provide ride or delivery services.{"\n"}
            We may use your information to calculate fares and Partner earnings.{"\n"}
            We may use your information for payments, customer support, safety and fraud prevention.{"\n"}
            We may use your information to comply with applicable laws and government requirements.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: हम आपकी जानकारी का उपयोग कैसे करते हैं:{"\n"}
            हम आपकी जानकारी का उपयोग आपका GoDrop Partner अकाउंट बनाने और उसका प्रबंधन करने के लिए करते हैं।{"\n"}
            हम आपकी पहचान और दस्तावेजों के सत्यापन के लिए आपकी जानकारी का उपयोग करते हैं।{"\n\n"}
            हम आपकी जानकारी का उपयोग आपको Guests से जोड़ने और राइड या डिलीवरी सेवाएं प्रदान करने के लिए करते हैं।{"\n"}
            हम आपकी जानकारी का उपयोग किराया और Partner की कमाई निर्धारित करने के लिए कर सकते हैं।{"\n"}
            हम आपकी जानकारी का उपयोग भुगतान, Customer Support, सुरक्षा और धोखाधड़ी रोकने के लिए कर सकते हैं।{"\n"}
            हम आपकी जानकारी का उपयोग लागू कानूनों और सरकारी आवश्यकताओं का पालन करने के लिए कर सकते हैं।
          </Text>
        </View>

        {/* Section 7: OTP and Communication */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">7. OTP and Communication</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            GoDrop may send OTPs and service-related messages to your registered mobile number.{"\n"}
            We may contact you through App notifications, SMS, phone calls, WhatsApp or email.{"\n"}
            These communications may relate to rides, payments, verification, safety, support and important account updates.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: OTP और संचार:{"\n"}
            GoDrop आपके रजिस्टर्ड मोबाइल नंबर पर OTP और सेवा से संबंधित संदेश भेज सकता है।{"\n"}
            हम आपसे App Notification, SMS, Phone Call, WhatsApp या Email के माध्यम से संपर्क कर सकते हैं।{"\n\n"}
            इन संचारों में राइड, भुगतान, सत्यापन, सुरक्षा, Support और महत्वपूर्ण अकाउंट अपडेट से संबंधित जानकारी हो सकती है।
          </Text>
        </View>

        {/* Section 8: Sharing of Information */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">8. Sharing of Information</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            GoDrop may share necessary information with service providers who help us operate the platform.{"\n"}
            This may include payment providers, mapping services, OTP/SMS providers, hosting providers and verification service providers.{"\n"}
            We may share information with government authorities or law-enforcement agencies when required by applicable law.{"\n"}
            GoDrop does not sell Partner personal information as a commercial product.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: जानकारी साझा करना:{"\n"}
            GoDrop आवश्यक जानकारी उन Service Providers के साथ साझा कर सकता है जो प्लेटफॉर्म चलाने में हमारी सहायता करते हैं।{"\n"}
            इसमें Payment Providers, Mapping Services, OTP/SMS Providers, Hosting Providers और Verification Service Providers शामिल हो सकते हैं।
            {"\n"}
            जहाँ लागू कानून के अनुसार आवश्यक हो, हम सरकारी अधिकारियों या कानून प्रवर्तन एजेंसियों के साथ जानकारी साझा कर सकते हैं।{"\n"}
            GoDrop Partner की व्यक्तिगत जानकारी को व्यावसायिक उत्पाद के रूप में बेचता नहीं है।
          </Text>
        </View>
        {/* Section 9: 9. Guest Information and Confidentiality */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">9. Guest Information and Confidentiality</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            A Partner may receive limited Guest information that is necessary to complete a ride or service.{"\n"}
            The Partner must keep Guest information confidential and use it only for the authorised service.{"\n"}
            The Partner must not misuse, save, publish or share Guest information without lawful permission.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: Guest की जानकारी और गोपनीयता:{"\n"}
            किसी राइड या सेवा को पूरा करने के लिए Partner को Guest की आवश्यक सीमित जानकारी प्राप्त हो सकती है।{"\n"}
            Partner को Guest की जानकारी गोपनीय रखनी होगी और उसका उपयोग केवल अधिकृत सेवा के लिए करना होगा।
            {"\n"}
            Partner बिना कानूनी अनुमति के Guest की जानकारी का दुरुपयोग, सेव, प्रकाशित या साझा नहीं कर सकता।
          </Text>
        </View>
        {/* Section 10: Data Security */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">10. Data Security</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            GoDrop takes reasonable technical and organisational measures to protect personal information.{"\n"}
            We take steps to protect information against unauthorised access, misuse, loss or disclosure.{"\n"}
            However, no electronic system or internet transmission can be guaranteed to be completely secure.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: डेटा सुरक्षा:{"\n"}
            GoDrop व्यक्तिगत जानकारी की सुरक्षा के लिए उचित तकनीकी और संगठनात्मक उपाय करता है।{"\n"}
            हम जानकारी को अनधिकृत पहुंच, दुरुपयोग, नुकसान या खुलासा होने से बचाने के लिए आवश्यक कदम उठाते हैं।
            {"\n"}
            हालांकि, किसी भी इलेक्ट्रॉनिक सिस्टम या इंटरनेट ट्रांसमिशन की पूर्ण सुरक्षा की गारंटी नहीं दी जा सकती।
          </Text>
        </View>
        {/* Section 11: Data Retention */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">11. Data Retention</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            GoDrop may retain your information for as long as reasonably necessary to provide services and fulfil legal obligations.{"\n"}
            Information may also be retained for financial records, dispute resolution, fraud prevention and safety purposes.{"\n"}
            When information is no longer required, GoDrop may delete, anonymise or securely dispose of it as permitted by applicable law.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: डेटा को सुरक्षित रखने की अवधि:{"\n"}
            GoDrop सेवाएं प्रदान करने और कानूनी दायित्वों को पूरा करने के लिए आपकी जानकारी को आवश्यक अवधि तक सुरक्षित रख सकता है।{"\n"}
            जानकारी को वित्तीय रिकॉर्ड, विवाद समाधान, धोखाधड़ी रोकने और सुरक्षा के उद्देश्यों के लिए भी रखा जा सकता है।{"\n"}
            जब जानकारी की आवश्यकता नहीं रहती है, तो GoDrop लागू कानून के अनुसार उसे Delete, Anonymise या सुरक्षित रूप से नष्ट कर सकता है।
          </Text>
        </View>
        {/* Section 12: Account Deactivation and Deletion */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">12. Account Deactivation and Deletion</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            A Partner may request deactivation or deletion of their GoDrop Partner account through the available support process.{"\n"}
            Certain information may be retained where required by law or for legitimate business, security or dispute-resolution purposes.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: अकाउंट बंद करना और डेटा हटाना:{"\n"}
            Partner उपलब्ध Support प्रक्रिया के माध्यम से अपने GoDrop Partner अकाउंट को बंद या Delete करने का अनुरोध कर सकता है।{"\n"}
            कुछ जानकारी कानून या वैध व्यावसायिक, सुरक्षा या विवाद समाधान उद्देश्यों के लिए आवश्यक होने पर सुरक्षित रखी जा सकती है।
          </Text>
        </View>
        {/* Section 13: Third-Party Services */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">13. Third-Party Services</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            The GoDrop App may use third-party services for maps, payments, OTP, hosting, verification, analytics and customer support.{"\n"}
            Such third parties may process information according to their applicable privacy policies and agreements.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: थर्ड-पार्टी सेवाएं:{"\n"}
            GoDrop App Maps, Payments, OTP, Hosting, Verification, Analytics और Customer Support के लिए Third-Party Services का उपयोग कर सकता है।{"\n"}
            ऐसे Third Parties अपनी लागू Privacy Policies और Agreements के अनुसार जानकारी को प्रोसेस कर सकते हैं।
          </Text>
        </View>
        {/* Section 14: Privacy Complaints and Support */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">14. Privacy Complaints and Support</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            If you have a privacy-related question, request or complaint, you may contact GoDrop through the support/contact details provided in the App or official website.{"\n"}
            GoDrop will handle privacy requests and complaints according to applicable law and its internal procedures.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: गोपनीयता संबंधी शिकायत और सहायता:{"\n"}
            यदि आपको Privacy से संबंधित कोई प्रश्न, अनुरोध या शिकायत है, तो आप App या Official Website में दिए गए Support/Contact विवरण के माध्यम से GoDrop से संपर्क कर सकते हैं।{"\n"}
            GoDrop Privacy Requests और Complaints को लागू कानून और अपनी आंतरिक प्रक्रियाओं के अनुसार संभालेगा।
          </Text>
        </View>
        {/* Section 15: Changes to this Privacy Policy */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">15. Changes to this Privacy Policy</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            GoDrop may update this Privacy Policy from time to time.{"\n"}
            Important changes may be communicated through the GoDrop App, SMS, email, WhatsApp or other appropriate channels.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: इस गोपनीयता नीति में बदलाव:{"\n"}
            GoDrop समय-समय पर इस Privacy Policy को अपडेट कर सकता है।{"\n"}
            महत्वपूर्ण बदलावों की जानकारी GoDrop App, SMS, Email, WhatsApp या अन्य उचित माध्यमों से दी जा सकती है।
          </Text>
        </View>
        {/* Section 16: Consent and Acceptance */}
        <View className="bg-lightCard dark:bg-darkCard rounded-2xl p-5 border border-lightBorder dark:border-darkBorder shadow-sm mb-6">
          <View className="flex-row items-center mb-3">
            <View className="w-7 h-7 rounded-full bg-rose-500/10 items-center justify-center mr-2">
              <Icon name="cash-outline" size={14} color="#F43F5E" />
            </View>
            <Text className="text-xs font-extrabold text-textLight dark:text-textDark">16. Consent and Acceptance</Text>
          </View>
          <Text className="text-xs text-textLightSecondary dark:text-textDarkSecondary leading-relaxed mb-2">
            By selecting “I Agree”, you confirm that you have read and understood this Privacy Policy.{"\n"}
            You consent to the collection and processing of your information as described in this Privacy Policy, subject to applicable law.
          </Text>
          <Text className="text-[11px] text-textLightSecondary dark:text-textDarkSecondary leading-relaxed font-medium bg-lightBg dark:bg-darkBg p-3 rounded-lg">
            हिंदी: सहमति और स्वीकृति:{"\n"}
            “I Agree” का चयन करके आप पुष्टि करते हैं कि आपने इस Privacy Policy को पढ़ और समझ लिया है।{"\n"}
            आप लागू कानून के अधीन, इस Privacy Policy में बताए गए तरीके से अपनी जानकारी के Collection और Processing के लिए सहमति देते हैं।
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicyScreen;

