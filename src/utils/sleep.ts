export async function sleep(ms: number | undefined) {
  try {
    await new Promise((resolve) => setTimeout(resolve, ms));
    return true;
  } catch {
    return false;
  }
}
