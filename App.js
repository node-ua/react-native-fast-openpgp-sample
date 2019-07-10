/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import OpenPGP from "react-native-fast-openpgp";

const passphrase = "sample";
const privateKey = `-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: Keybase OpenPGP v1.0.0
Comment: https://keybase.io/crypto

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
+Eqeze8lI1mBBllSMSb7vud7oq53
=gLDV
-----END PGP PRIVATE KEY BLOCK-----
`;

const publicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: Keybase OpenPGP v1.0.0
Comment: https://keybase.io/crypto

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
=0AbX
-----END PGP PUBLIC KEY BLOCK-----
`;
const App = () => {
  const [inputEncrypt, setInputEncrypt] = useState();
  const [encrypted, setEncrypted] = useState();
  const [decrypted, setDecrypted] = useState();

  const [signed, setSigned] = useState();
  const [verified, setVerified] = useState();
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          keyboardShouldPersistTaps={'handled'}
        >
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Encrypt</Text>
              <TextInput
                value={inputEncrypt}
                onChangeText={text => {
                  setInputEncrypt(text);
                }}
                style={{ backgroundColor: Colors.white, borderRadius: 4 }}
                placeholder={"insert message here"}
              />
              <Button
                title={"Encrypt"}
                onPress={async () => {
                  const output = await OpenPGP.encrypt(inputEncrypt, publicKey);
                  setEncrypted(output);
                }}
              />
              <ScrollView style={{ maxHeight: 200 }}>
                <Text selectable>{encrypted}</Text>
              </ScrollView>
            </View>
            {!!encrypted && (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Decrypt</Text>
                <Button
                  title={"Decrypt"}
                  onPress={async () => {
                    const output = await OpenPGP.decrypt(
                      encrypted,
                      privateKey,
                      passphrase
                    );
                    setDecrypted(output);
                  }}
                />
                {!!decrypted && (
                  <Text selectable style={styles.sectionDescription}>
                    {decrypted}
                  </Text>
                )}
              </View>
            )}

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Sign</Text>
              <TextInput
                value={inputEncrypt}
                onChangeText={text => {
                  setInputEncrypt(text);
                }}
                style={{ backgroundColor: Colors.white, borderRadius: 4 }}
                placeholder={"insert message here"}
              />
              <Button
                title={"Sign"}
                onPress={async () => {
                  const output = await OpenPGP.sign(
                    inputEncrypt,
                    publicKey,
                    privateKey,
                    passphrase
                  );
                  setSigned(output);
                }}
              />
              <ScrollView style={{ maxHeight: 200 }}>
                <Text selectable>{signed}</Text>
              </ScrollView>
            </View>
            {!!signed && (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Verify</Text>
                <Button
                  title={"Verify"}
                  onPress={async () => {
                    const output = await OpenPGP.verify(
                      signed,
                      inputEncrypt,
                      publicKey
                    );

                    setVerified(output);
                  }}
                />
                {typeof verified !== "undefined" && (
                  <Text selectable style={styles.sectionDescription}>
                    {verified ? "valid" : "invalid"}
                  </Text>
                )}
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    backgroundColor: Colors.light,
    borderRadius: 10,
    padding: 20,
    margin: 20,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700",
  }
});

export default App;
