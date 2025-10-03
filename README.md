# Xpath_By_Nini
## Top 6 interview questions on hashtag#XPath commonly asked in automation testing interviews:
1. What is XPath? How is it used in Selenium?
2. What is the difference between Absolute XPath and Relative XPath?
Highlight the difference, focusing on the structure (/ for absolute and // for relative) and when to use each.
3. How do you handle dynamic elements using XPath?
4. Can you write an XPath to locate an element with specific text?
5. What is the difference between // and ./ in XPath?
6. Write an XPath to locate the nth child of an element.

## ✅ XPath Practice Questions

1. Select the **Username** input field in the Login Form
    
2. Select the **Password** input field
    
3. Select the **“Remember me”** checkbox or label
    
4. Select the **Login** button
    
5. Select the **“Forgot password?”** link
    
6. In the main menu, select the node corresponding to **“Admin”**
    
7. Select the **5th** menu item (if “Menu Count: 5”)
    
8. Select **all** menu items (Admin, PIM, Leave, Time, Recruitment)
    
9. Select the **Search** button in the Search Panel
    
10. Select the **“Read our PriVaCy policy”** link (case-insensitive match)
    
11. Select the **“Download Guide (PDF)”** link
    
12. Select the **Logo** image (in the Search Panel)
    
13. From the **Orders Table**, select the **row** for invoice `INV-122`
    
14. From the Orders Table, select the **Product** name cell in the `INV-122` row
    
15. From the Orders Table, select the **Price** cell in the `INV-121` row
    
16. Select the **Pay** button corresponding to `INV-123`
    
17. Select **all** `Pay` buttons in the orders table
    
18. In the Profile Section, select the **Email** label or value
    
19. In the Profile Section, select the **Country** dropdown or option with text “India”
    
20. Select the **Edit** link/button in the Profile section
    
21. Select the element with class token **“Primary CTA”**
    
22. Select the element with class token **“Secondary CTA”**
    
23. Select the element with class token **“rounded chip”**
    
24. Select the element with class token **“tiny chip”**
    
25. Select the **Email Notifications** element under ARIA section
    
26. Select the **SMS Notifications** element
    
27. Select the **SVG** icon (hint: you must use `local-name()`)
    
28. Select a **path** node inside the SVG icon
    
29. Select the **Dynamic Input** field whose `id` starts with `user_`
    
30. Select the **Dynamic Input** whose `id` contains `react-select`
    
31. Open the **Confirm modal** and select the **Cancel** button
    
32. Open the Confirm modal and select the **Delete** button
    
33. In nested structure, select an element by combining axes (e.g. select a descendant of a known parent)
    
34. Use **union (**`|`) to select both “Login” button and “Forgot password?” link
    
35. Select all nodes of type **text()** under a certain parent (e.g. in a table cell)
    
36. Select all **comment()** nodes (if present)
    
37. Select all **processing-instruction()** nodes (if present)
    
38. Use `contains()` to select the “Read our PriVaCy policy” link (case-insensitive)
    
39. Use `starts-with()` to select the `id` starting nodes (dynamic input)
    
40. Use `string-length()` to find elements whose text length &gt; some value
    
41. Use `normalize-space()` to trim extra spaces and match text
    
42. Use `translate()` to convert string to lower-case or upper-case for matching
    
43. Select the **last()** menu item (i.e. “Recruitment”)
    
44. Select the **position() = 2** menu item (“PIM”)
    
45. Use predicate combining **and / or** (e.g. products with price &gt; X and &lt; Y)
    
46. Select Orders rows where price is &gt; 300 (filter condition)
    
47. Select Orders rows where price &lt;= 1000
    
48. Select the first **two** rows of the Orders Table
    
49. Select all **cells** in the Orders Table under “Product” column
    
50. Select all **attribute** nodes (e.g. all `@id`, `@class` in a context)
    
51. Use **ancestor** or **ancestor-or-self** axes to retrieve a parent element
    
52. Use **preceding-sibling** or **following-sibling** to move between cells in a row
    
53. Use **preceding** or **following** axes for nodes before/after a given node
    
54. Use **parent::** axis explicitly to go to parent of a node
    
55. Use **descendant::** axis to get nested elements under a known node
    
56. Use **self::** or **descendant-or-self::** in a path
    
57. Use **ancestor::** or **ancestor-or-self::** from a deep node
    
58. Select nodes using **wildcard** `*` (e.g. any child element)
    
59. Select **any node** `node()` under a certain path
    
60. Combine axes and predicates (e.g. descendant::div\[@class='foo'\]\[position()=1\])
    
61. Edge case: match text with **extra spaces** around (use `normalize-space()`)
    
62. Tricky: select element when there are **nested elements or extra wrappers**
    
63. Conceptual: Explain **why XPath cannot pierce shadow DOM**, and how you'd locate elements in shadow DOM using JS
    
64. In the iframe section (if there is embedded frame) — **switch to frame first**, then inside it locate an element
    
65. Use **local-name()** to handle namespaces or elements without a fixed prefix
    
66. Use union + axes (e.g. select two different elements via different axes)
    
67. Use **not()** in a predicate (e.g. exclude nodes with some class)
    
68. Use **boolean expressions** in predicates (e.g. `[not(@disabled) and contains(@class, 'active')]`)
    
69. Use **multiple predicates in chain** (e.g. `//div[@class='x'][contains(text(),'Y')][position()=1]`)
    
70. Use **complex path chaining** combining many features above.
