import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 14,
    width: '92%',
    marginHorizontal: '4%',
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 14,
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  taskDesc: {
    marginTop: 4,
    fontSize: 14,
    color: '#4b5563',
  },
  cardFooter: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  deleteText: {
    color: '#b91c1c',
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#fecaca',
    backgroundColor: '#fee2e2',
  },
});