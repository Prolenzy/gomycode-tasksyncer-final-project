export function getInitials(fullName: string): string {
    const names: string[] = fullName.split(" ");

    const initials: string[] = names.slice(0, 2).map((name) => name[0].toUpperCase());

    const initialsStr: string = initials.join("");

    return initialsStr;
}
