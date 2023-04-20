import React, {useState, useRef} from 'react';
import {
  Text,
  TextInput,
  View,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  TwilioVideoLocalView,
  TwilioVideoParticipantView,
  TwilioVideo,
} from 'react-native-twilio-video-webrtc';

import styles from './styles';
import cameraOffIcon from '../../assets/images/icons/cameraOff.png';
import cameraOnIcon from '../../assets/images/icons/cameraOn.png';
import microOnIcon from '../../assets/images/icons/microOn.png';
import microOffIcon from '../../assets/images/icons/microOff.png';
import cameraToggle from '../../assets/images/icons/cameraToggle.png';
import callEndIcon from '../../assets/images/icons/callEnd.png';

const Twilio = () => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [status, setStatus] = useState('disconnected');
  const [videoTracks, setVideoTracks] = useState(new Map());
  const [token, setToken] = useState('');
  const twilioVideo = useRef<any | null>(null);

  const _onConnectButtonPress = async () => {
    if (Platform.OS === 'android') {
      await _requestAudioPermission();
      await _requestCameraPermission();
    }
    if (twilioVideo?.current) {
      try {
        twilioVideo?.current?.connect({
          accessToken: token,
          enableNetworkQualityReporting: true,
          dominantSpeakerEnabled: true,
        });
        setStatus('connecting');
      } catch (e) {
        console.log('e :>> ', e);
      }
    }
  };

  const _onEndButtonPress = () => {
    if (twilioVideo) {
    }
    twilioVideo.current.disconnect();
  };

  const _onMuteButtonPress = () => {
    if (twilioVideo?.current) {
      twilioVideo?.current
        .setLocalAudioEnabled(!isAudioEnabled)
        .then((isEnabled: any) => setIsAudioEnabled(isEnabled));
    }
  };

  const _onToggleVideoButtonPress = () => {
    if (twilioVideo?.current) {
      twilioVideo?.current
        ?.setLocalVideoEnabled(!isVideoEnabled)
        .then((isEnabled: any) => setIsVideoEnabled(isEnabled));
    }
  };

  const _onFlipButtonPress = () => {
    if (twilioVideo?.current) {
      twilioVideo?.current.flipCamera();
    }
  };

  const _onRoomDidConnect = () => {
    setStatus('connected');
  };

  const _onRoomDidDisconnect = ({error}: any) => {
    console.log('ERROR: ', error);

    setStatus('disconnected');
  };

  const _onRoomDidFailToConnect = (error: any) => {
    console.log('ERROR: ', error);

    setStatus('disconnected');
  };

  const _onParticipantAddedVideoTrack = ({participant, track}: any) => {
    console.log('onParticipantAddedVideoTrack: ', participant, track);

    setVideoTracks(
      new Map([
        ...videoTracks,
        [
          track.trackSid,
          {participantSid: participant.sid, videoTrackSid: track.trackSid},
        ],
      ]),
    );
  };

  const _onParticipantRemovedVideoTrack = ({participant, track}: any) => {
    console.log('onParticipantRemovedVideoTrack: ', participant, track);

    const newVideoTracks = new Map(videoTracks);
    newVideoTracks.delete(track.trackSid);

    setVideoTracks(newVideoTracks);
  };

  const _onNetworkLevelChanged = ({participant, isLocalUser, quality}: any) => {
    console.log(
      'Participant',
      participant,
      'isLocalUser',
      isLocalUser,
      'quality',
      quality,
    );
  };

  const _onDominantSpeakerDidChange = ({
    roomName,
    roomSid,
    participant,
  }: any) => {
    console.log(
      'onDominantSpeakerDidChange',
      `roomName: ${roomName}`,
      `roomSid: ${roomSid}`,
      'participant:',
      participant,
    );
  };

  const _requestAudioPermission = () => {
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Need permission to access microphone',
        message:
          'To run this demo we need permission to access your microphone',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
  };

  const _requestCameraPermission = () => {
    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      title: 'Need permission to access camera',
      message: 'To run this demo we need permission to access your camera',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    });
  };

  return (
    <View style={styles.container}>
      {status === 'disconnected' && (
        <View>
          <Text style={styles.welcome}>Enter a Twilio access token</Text>

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="Enter your access token"
            onChangeText={text => setToken(text)}
            value={token}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={[styles.connectButton, !token && styles.disabledButton]}
            onPress={() => token && _onConnectButtonPress()}>
            <Text style={styles.connectButtonTitle}>Connect</Text>
          </TouchableOpacity>
        </View>
      )}

      {(status === 'connected' || status === 'connecting') && (
        <View style={styles.callContainer}>
          {status === 'connected' && (
            <View style={styles.remoteGrid}>
              {Array.from(videoTracks, ([trackSid, trackIdentifier]) => {
                return (
                  <TwilioVideoParticipantView
                    style={styles.remoteVideo}
                    key={trackSid}
                    trackIdentifier={trackIdentifier}
                  />
                );
              })}
            </View>
          )}
          <TwilioVideoLocalView
            enabled={true}
            style={styles.localVideo}
            applyZOrder
          />

          <View style={styles.videoTip}>
            {!isVideoEnabled && (
              <Text style={styles.videoTipText}>Your camera is off</Text>
            )}
            {!isAudioEnabled && (
              <Text style={styles.videoTipText}>You are muted</Text>
            )}
          </View>

          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={_onEndButtonPress}>
              <Image source={callEndIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.optionButton, !isAudioEnabled && styles.buttonOff]}
              onPress={_onMuteButtonPress}>
              {isAudioEnabled ? (
                <Image source={microOnIcon} style={[styles.icon]} />
              ) : (
                <Image source={microOffIcon} style={styles.icon} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={_onFlipButtonPress}>
              <Image source={cameraToggle} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.optionButton, !isVideoEnabled && styles.buttonOff]}
              onPress={_onToggleVideoButtonPress}>
              {isVideoEnabled ? (
                <Image source={cameraOnIcon} style={[styles.icon]} />
              ) : (
                <Image source={cameraOffIcon} style={styles.icon} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      )}

      <TwilioVideo
        ref={twilioVideo}
        onRoomDidConnect={_onRoomDidConnect}
        onRoomDidDisconnect={_onRoomDidDisconnect}
        onRoomDidFailToConnect={_onRoomDidFailToConnect}
        onParticipantAddedVideoTrack={_onParticipantAddedVideoTrack}
        onParticipantRemovedVideoTrack={_onParticipantRemovedVideoTrack}
        onNetworkQualityLevelsChanged={_onNetworkLevelChanged}
        onDominantSpeakerDidChange={_onDominantSpeakerDidChange}
      />
    </View>
  );
};

export default Twilio;
