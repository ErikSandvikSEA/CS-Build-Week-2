class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        rows = []
        for i in range(numRows):
            # First row
            if i == 0:
                rows.append([1])

            # Second row
            elif i == 1:
                rows.append([1, 1])

            # General case rows
            else:
                # Start with 1
                new_row = [1]

                # Fill in the middle numbers
                middle_number_count = i - 1

                for j in range(middle_number_count):
                    col_index = j + 1
                    prev_row = rows[-1]
                    value = prev_row[col_index] + prev_row[col_index - 1]

                    new_row.append(value)

                # Add a one on the end
                new_row.append(1)

                rows.append(new_row)

        return rows
