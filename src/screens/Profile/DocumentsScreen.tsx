import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../../components/ScreenHeader';
import { View, Text, ScrollView, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ROUTES } from '../../constants/routes';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchDriverDocumentsThunk } from '../../redux/slices/driverSlice';
import { useThemePalette } from '../../utils/theme';

const DocumentsScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { palette } = useThemePalette();

  const driver = useAppSelector(state => state.driver.profile);
  const driverDocument = useAppSelector(state => state.driver.driverDocument);

  useEffect(() => {
    dispatch(fetchDriverDocumentsThunk());
  }, [dispatch]);

  const getDocumentStatus = (id: string) => {
    if (id === 'vehicle_setup') {
      const uploaded = driver?.documents?.vehicleUploaded || !!driver?.driver_id;
      return uploaded ? 'approved' : 'not_uploaded';
    }

    if (!driverDocument) return 'not_uploaded';

    if (id === 'dl') {
      const dl = driverDocument.dl;
      if (!dl?.front?.url) return 'not_uploaded';
      return dl.front.status || 'pending';
    }
    if (id === 'aadhaar') {
      const aadhaar = driverDocument.aadhaar;
      if (!aadhaar?.front?.url) return 'not_uploaded';
      return aadhaar.front.status || 'pending';
    }
    if (id === 'pan') {
      const pan = driverDocument.pan;
      if (!pan?.url) return 'not_uploaded';
      return pan.status || 'pending';
    }
    if (id === 'rc') {
      const rc = driverDocument.rc;
      if (!rc?.front?.url) return 'not_uploaded';
      return rc.front.status || 'pending';
    }
    return 'not_uploaded';
  };

  const renderStatusBadge = (status: string) => {
    let label = 'Not Uploaded';
    let bg = 'rgba(148, 163, 184, 0.12)';
    let color = palette.mutedText;

    if (status === 'approved' || status === 'verified') {
      label = 'Verified';
      bg = 'rgba(34, 197, 94, 0.12)';
      color = palette.success;
    } else if (status === 'pending') {
      label = 'Pending';
      bg = 'rgba(245, 158, 11, 0.12)';
      color = palette.warning;
    } else if (status === 'rejected') {
      label = 'Rejected';
      bg = 'rgba(239, 68, 68, 0.12)';
      color = palette.destructive;
    }

    return (
      <View style={[styles.statusBadge, { backgroundColor: bg }]}>
        <View style={[styles.statusDot, { backgroundColor: color }]} />
        <Text style={[styles.statusText, { color }]}>{label}</Text>
      </View>
    );
  };

  const docList = [
    {
      id: 'dl',
      name: 'Driving License',
      icon: 'card-outline',
      color: '#4F46E5',
      route: ROUTES.DL_VIEW,
    },
    {
      id: 'aadhaar',
      name: 'Aadhaar Card',
      icon: 'finger-print-outline',
      color: '#0EA5E9',
      route: ROUTES.AADHAAR_VIEW,
    },
    {
      id: 'pan',
      name: 'PAN Card',
      icon: 'document-text-outline',
      color: '#10B981',
      route: ROUTES.PAN_VIEW,
    },
    {
      id: 'rc',
      name: 'Vehicle RC',
      icon: 'reader-outline',
      color: '#F59E0B',
      route: ROUTES.RC_VIEW,
    },
    {
      id: 'vehicle_setup',
      name: 'Vehicle Details',
      icon: 'car-sport-outline',
      color: '#EC4899',
      route: ROUTES.VEHICLE_SETUP_VIEW,
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: palette.background }]} edges={['top', 'bottom']}>
      <StatusBar barStyle={palette.statusBarStyle} backgroundColor={palette.background} />
      <ScreenHeader title="Documents" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={[styles.card, { backgroundColor: palette.surface, borderColor: palette.border }]}>
          <Text style={[styles.sectionTitle, { color: palette.text }]}>Verification Status</Text>

          {docList.map((doc, idx) => {
            const isLast = idx === docList.length - 1;
            const docStatus = getDocumentStatus(doc.id);
            return (
              <TouchableOpacity
                key={doc.id}
                style={[
                  styles.docRow,
                  !isLast && { borderBottomWidth: 1, borderBottomColor: palette.border },
                ]}
                onPress={() => navigation.navigate(doc.route)}
                activeOpacity={0.7}
              >
                <View style={styles.docLeft}>
                  <View
                    style={[
                      styles.iconCircle,
                      { backgroundColor: `${doc.color}1A` },
                    ]}
                  >
                    <Icon name={doc.icon} size={20} color={doc.color} />
                  </View>
                  <View>
                    <Text style={[styles.docNameText, { color: palette.text }]}>{doc.name}</Text>
                    <Text style={[styles.docSubtext, { color: palette.mutedText }]}>Tap to view document</Text>
                  </View>
                </View>

                <View style={styles.docRight}>
                  {renderStatusBadge(docStatus)}
                  <Icon name="chevron-forward" size={16} color={palette.mutedText} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1.5,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 16,
    marginLeft: 2,
  },
  docRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  docLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  docNameText: {
    fontSize: 14,
    fontWeight: '800',
  },
  docSubtext: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },
  docRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '800',
  },
});

export default DocumentsScreen;
