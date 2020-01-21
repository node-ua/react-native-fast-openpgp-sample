/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import OpenPGP from '@nodeua/react-native-fast-openpgp';

const passphrase = 'test';
const privateKey = `-----BEGIN PGP PRIVATE KEY BLOCK-----
Version: react-native-fast-openpgp

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
15yK8KQkqw==
=EpE0
-----END PGP PRIVATE KEY BLOCK-----`;

const publicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: react-native-fast-openpgp

xsBNBF4nVGsBCAC6DoSqmsuekbnG1es6xKssagxC5LltwJVGMJNJbOKme0u6Hj2k
LFidqJzWI54JRgsj7Ig8PO+HulqwMeFVn3lxGzhf/5We54LedHlHikKP8tlUHEKk
7TTzgBEfR2CsO6YXSqGdXDKYnts5joxuROvnsZF0RKqDi3ITIFs5uiqiLix1aKw7
m5o3QzJDmZ2CwiYCGaQqo9fXJ58TIKRjAzLxVNLEG3ncaDtOgrLyAihsr4UARDcm
yTpxYM+nwuWte0v0DQ9IqHq5RT4ib7t5qgkODRY9k3LQKrQLG8UyCIfqHGgPjcac
wJJcUyFDuOelDyPBA+9phEobHNadgbgEf3FvABEBAAHNFHRlc3QgPHRlc3RAdGVz
dC5jb20+wsBoBBMBCAAcBQJeJ1RrCRD8TIk9mwPgDwIbAwIZAQILBwIVCAAAoTEI
AKd3gcP2o6X6FBXkN7PYbB69G2j+omvwHOv88sVLwNM3UskDkkb0k9X0JMmhGJnO
BPTMdMdfewj69ipfOTAPJ6Hvt7oPyZCDDrkowtSQ+jJhK/0RafJ7GUmJ6a+o7O17
A++bkjO4s23aOBPssxVR4M/UFAkCrxEXz1N+BbSFmIrxUEdWUlqFekiO+vWKXeyG
b014l+7bv3BJXWXJsC27Ib+aGPtxzve3XIaV9VB/a2s3op1BNI3tNZcLV+dDzeQK
4GTTnpjnFZmA99M5+ju8aPQ/U8qyYvxspjVAnuzGpVtKPgHicKB9y/NueU9qNFTJ
3TaylR0VVrA0/a2gCn+rH1XOwE0EXidUawEIANg745+owk6yRp997KO76CgIaxnX
XjBTfGd++uxv4IPaF0snd1cS5v4FiQaiLlXxNiqb/lN+z0nvbj8dE18UH8VX9CBQ
cbIzMT4/mmO9pVP/TWKwRQng+0wYxlEtoKdNwulzCEPL/M9THVsEqBzTYCG5Pd5Q
E4nFi9qC1RlvKPAWuKCqK+LFm14F+JUpSalHeAwP4udSpYNSbi0Qp8+NIf5Bhvi7
wmQLJlCJp4FNJuBMquxSSV4LBuNG9/KEuPTaeD4k6DeERLb9MtDCYmhtcQnYCnvM
3lX3lOYGkqHH8IqpiJEDBY8ren7H8+LFRI3g05kGW97y+bDUvw1zmSnIPx8AEQEA
AcLAXwQYAQgAEwUCXidUawkQ/EyJPZsD4A8CGwwAAJ6cCACeuFIujE89gxZ467PI
LFrgTyGMS6cvDema3/8WNat8WpmzweSnkCKpJpcHApdMOCl2XVlZIMGgGZYNXfxb
PI2TW7ELr1d3MLi+QlIduqgTqvUDP4w7eJi5Avv15cckcclt5YSF3QCUIsAgKDbK
P8MZauczzotgcM5rxLXRHBY02D8rUDkO3iZxnXSt+P6RGl/pvYQkPGQYWtD9NoJe
sm4etDg6KelwZYQR1SdVA5ql2wuXaSLwKCfMVfhZANaLt3sTa/f0J/4AwHXdCvL4
gqifKFjKQk+SjR7e5rTT9T0aBn738ABg5PucxdkgPQmUYAuXPH7zE9/RwQnXnIrw
pCSr
=raaU
-----END PGP PUBLIC KEY BLOCK-----`;
const App = () => {
  const [inputEncrypt, setInputEncrypt] = useState();
  const [encrypted, setEncrypted] = useState();
  const [decrypted, setDecrypted] = useState();

  const [signed, setSigned] = useState();
  const [verified, setVerified] = useState();
  const [encryptedSymmetric, setEncryptedSymmetric] = useState();
  const [decryptedSymmetric, setDecryptedSymmetric] = useState();

  const [keyPair, setKeyPair] = useState({ publicKey: '', privateKey: '', keyId: '' });
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
                placeholder={'insert message here'}
              />
              <Button
                title={'Encrypt'}
                onPress={async () => {
                  const output = await OpenPGP.encryptWithMultipleKeys(
                    inputEncrypt,
                    [publicKey, keyPair.publicKey]
                  );
                  setEncrypted(output);
                }}
              />
              <View>
                <Text selectable>{encrypted}</Text>
              </View>
            </View>
            {!!encrypted && (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Decrypt</Text>
                <Button
                  title={'Decrypt'}
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
                placeholder={'insert message here'}
              />
              <Button
                title={'Sign'}
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
              <View>
                <Text selectable>{signed}</Text>
              </View>
            </View>
            {!!signed && (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Verify</Text>
                <Button
                  title={'Verify'}
                  onPress={async () => {
                    const output = await OpenPGP.verify(
                      signed,
                      inputEncrypt,
                      publicKey
                    );

                    setVerified(output);
                  }}
                />
                {typeof verified !== 'undefined' && (
                  <Text selectable style={styles.sectionDescription}>
                    {verified ? 'valid' : 'invalid'}
                  </Text>
                )}
              </View>
            )}

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Encrypt Symmetric</Text>
              <TextInput
                value={inputEncrypt}
                onChangeText={text => {
                  setInputEncrypt(text);
                }}
                style={{ backgroundColor: Colors.white, borderRadius: 4 }}
                placeholder={'insert message here'}
              />
              <Button
                title={'Encrypt Symmetric'}
                onPress={async () => {
                  const output = await OpenPGP.encryptSymmetric(
                    inputEncrypt,
                    passphrase
                  );
                  setEncryptedSymmetric(output);
                }}
              />
              <View>
                <Text selectable>{encryptedSymmetric}</Text>
              </View>
            </View>
            {!!encryptedSymmetric && (
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Decrypt Symmetric</Text>
                <Button
                  title={'Decrypt Symmetric'}
                  onPress={async () => {
                    const output = await OpenPGP.decryptSymmetric(
                      encryptedSymmetric,
                      passphrase
                    );

                    setDecryptedSymmetric(output);
                  }}
                />
                <Text selectable style={styles.sectionDescription}>
                  {decryptedSymmetric}
                </Text>
              </View>
            )}

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Generate</Text>
              <Button
                title={'Generate'}
                onPress={async () => {
                  const output = await OpenPGP.generate({
                    name: 'test',
                    email: 'test@test.com',
                    passphrase: 'test',
                    keyOptions: {
                      RSABits: 1024,
                    },
                  });
                  const keyId = await OpenPGP.getKeyId(output.publicKey);
                  setKeyPair({ ...output, ...{ keyId: keyId } });
                }}
              />
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
                  Key ID
                </Text>
                <Text selectable>{keyPair.keyId}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
                  PublicKey
                </Text>
                <Text selectable>{keyPair.publicKey}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>
                  PrivateKey
                </Text>
                <Text selectable>{keyPair.privateKey}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    backgroundColor: Colors.light,
    borderRadius: 10,
    padding: 20,
    margin: 20,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700'
  },
});

export default App;
