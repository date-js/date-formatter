import DateFormatter from './DateFormatter';

// Named export: the class, for module users who want their own isolated instance
export { DateFormatter };

// Default export: pre-instantiated singleton, for convenience and browser global (UMD)
const defaultInstance = new DateFormatter();
export default defaultInstance;
