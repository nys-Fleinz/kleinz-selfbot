#include <windows.h>
#include <stdio.h>

int main(int argc, char* argv[]) {
  if (argc < 2) {
    printf("Usage: %s <window_title>\n", argv[0]);
    return 1;
  }

  HWND hwnd = FindWindow(NULL, argv[1]);

  if (hwnd == NULL) {
    printf("Window with title '%s' not found.\n", argv[1]);
    return 1;
  }

  BOOL success = SetForegroundWindow(hwnd);

  if (success) {
  } else {
    printf("Failed to bring window to foreground.\n");
  }

  return 0;
}
