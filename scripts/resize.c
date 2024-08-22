#include <windows.h>
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
  if (argc != 4) {
    printf("Usage: %s <window_name> <width> <height>\n", argv[0]);
    return 1;
  }

  char *windowName = argv[1];

  int width = atoi(argv[2]);
  int height = atoi(argv[3]);

  HWND hwnd = FindWindowA(NULL, windowName);

  if (hwnd == NULL) {
    printf("Window '%s' not found\n", windowName);
    return 1;
  }

  MoveWindow(hwnd, 100, 100, width, height, TRUE);

  return 0;
}