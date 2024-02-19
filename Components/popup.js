import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const PopupScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsVisible(true);
  };

  const handleClosePopup = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>


      <Modal visible={isVisible} transparent={true} animationType="fade">
        <TouchableOpacity style={styles.modalBackground} activeOpacity={1} onPress={handleClosePopup}>
          <View style={styles.popupContainer}>
            <Text style={styles.popupTitle}>Popup Content</Text>
            {/* Add your desired content for the pop-up */}
            <TouchableOpacity onPress={handleClosePopup} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PopupScreen;