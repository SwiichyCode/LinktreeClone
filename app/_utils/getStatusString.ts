export enum FetchStatus {
  Idle,
  Loading,
  Success,
  Error,
}

export const getStatusString = (status: FetchStatus): string => {
  switch (status) {
    case FetchStatus.Idle:
      return "idle";
    case FetchStatus.Loading:
      return "loading";
    case FetchStatus.Success:
      return "success";
    case FetchStatus.Error:
      return "error";
    default:
      return "";
  }
};
