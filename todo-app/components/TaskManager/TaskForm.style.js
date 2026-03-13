import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    width: '92%',
    alignSelf: 'center',
    padding: 16,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#f9fafb',
  },
  btn: {
    marginTop: 4,
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#2563eb',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
})