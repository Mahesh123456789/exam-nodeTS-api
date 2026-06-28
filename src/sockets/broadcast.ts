
let globalIO: any = null;

export const setIO = (io: any) => {
  globalIO = io;
};

export const ioEmit = (event: string, payload: any) => {
  if (!globalIO) return;
  globalIO.emit(event, payload);
};
